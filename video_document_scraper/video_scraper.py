import argparse
import os
import cv2
import pytesseract
import spacy
from pathlib import Path


def extract_frames(video_path, frame_dir, step=1):
    cap = cv2.VideoCapture(str(video_path))
    if not cap.isOpened():
        raise RuntimeError(f"Cannot open video: {video_path}")
    idx = 0
    saved = []
    while True:
        ret, frame = cap.read()
        if not ret:
            break
        if idx % step == 0:
            frame_path = frame_dir / f"frame_{idx:06d}.png"
            cv2.imwrite(str(frame_path), frame)
            saved.append(frame_path)
        idx += 1
    cap.release()
    return saved


def preprocess_image(img_path):
    image = cv2.imread(str(img_path))
    if image is None:
        raise RuntimeError(f"Unable to read {img_path}")
    gray = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)
    gray = cv2.bilateralFilter(gray, 9, 75, 75)
    _, thresh = cv2.threshold(gray, 0, 255, cv2.THRESH_BINARY + cv2.THRESH_OTSU)
    return thresh


def ocr_image(image):
    text = pytesseract.image_to_string(image)
    return text


def classify_text(text, nlp):
    doc = nlp(text)
    persons = [ent.text for ent in doc.ents if ent.label_ == 'PERSON']
    # naive document type classification using keywords
    doc_type = 'unknown'
    if 'invoice' in text.lower():
        doc_type = 'invoice'
    elif 'report' in text.lower():
        doc_type = 'report'
    elif 'letter' in text.lower():
        doc_type = 'letter'
    return doc_type, persons


def organize_frame(frame_path, output_dir, doc_type, persons):
    dest_dir = output_dir / doc_type
    dest_dir.mkdir(parents=True, exist_ok=True)
    person_str = '_'.join(sorted(set(persons))) or 'unknown'
    dest = dest_dir / f"{person_str}_{frame_path.name}"
    os.rename(frame_path, dest)


def main():
    parser = argparse.ArgumentParser(description="Extract documents from video")
    parser.add_argument('--video', required=True, help='Path to video file')
    parser.add_argument('--output', required=True, help='Directory to store results')
    parser.add_argument('--frame-step', type=int, default=1,
                        help='Process every n-th frame (default=1)')
    args = parser.parse_args()

    video_path = Path(args.video)
    output_dir = Path(args.output)
    tmp_dir = output_dir / 'frames'
    tmp_dir.mkdir(parents=True, exist_ok=True)

    print("Extracting frames...")
    frames = extract_frames(video_path, tmp_dir, step=args.frame_step)

    nlp = spacy.load('en_core_web_sm')

    print("Processing frames...")
    for frame_path in frames:
        processed = preprocess_image(frame_path)
        text = ocr_image(processed)
        doc_type, persons = classify_text(text, nlp)
        organize_frame(frame_path, output_dir, doc_type, persons)
    # remove tmp frame directory
    for leftover in tmp_dir.glob('*.png'):
        leftover.unlink()
    tmp_dir.rmdir()

    print("Done. Organized frames are in", output_dir)


if __name__ == '__main__':
    main()

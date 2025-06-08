# Video Document Scraper

This directory contains a Python script for extracting document images from low resolution video files. The script reads a video, grabs frames that contain documents, applies OCR to recover the text, and organizes the frames by document type and detected persons.

## Usage

```bash
python3 video_scraper.py --video path/to/video.mp4 --output output_dir
```

The script depends on `opencv-python`, `pytesseract` and `spacy`. You will also need the English language model for spaCy (`python -m spacy download en_core_web_sm`) and a Tesseract OCR installation.

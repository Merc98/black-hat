import express from 'express';
import cors from 'cors';
import multer from 'multer';
import fs from 'fs';
import path from 'path';
import * as THREE from 'three';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader.js';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry.js';
import { STLExporter } from 'three/examples/jsm/exporters/STLExporter.js';
import { GLTFExporter } from 'three/examples/jsm/exporters/GLTFExporter.js';
import { mergeBufferGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import { checkThickness } from './utils/thicknessValidator.js';

const app = express();
const upload = multer();
const PORT = process.env.PORT || 3001;
const GOLD_PRICE_PER_GRAM = 65;
const TARGET_HEIGHT_MM = 25;
const MIN_THICKNESS_MM = 1.4;
const PROFILE_POINTS = [
  new THREE.Vector2(0, 0),
  new THREE.Vector2(0.2, 0.7),
  new THREE.Vector2(0.5, 1.0),
  new THREE.Vector2(0.8, 0.7),
  new THREE.Vector2(1.0, 0),
];

const __dirname = path.dirname(new URL(import.meta.url).pathname);
const generatedDir = path.join(__dirname, 'generated');

if (!fs.existsSync(generatedDir)) {
  fs.mkdirSync(generatedDir, { recursive: true });
}

app.use(cors());
app.use(express.json({ limit: '2mb' }));
app.use(upload.any());
app.use('/generated', express.static(generatedDir));

const nameRegex = /^[A-Z]{3,10}$/;

function sanitizeName(name) {
  return (name || '').toString().trim().toUpperCase();
}

function validateName(name) {
  return nameRegex.test(name);
}

function interpolateProfile(t) {
  for (let i = 1; i < PROFILE_POINTS.length; i += 1) {
    const prev = PROFILE_POINTS[i - 1];
    const curr = PROFILE_POINTS[i];
    if (t <= curr.x) {
      const localT = (t - prev.x) / (curr.x - prev.x || 1);
      return THREE.MathUtils.lerp(prev.y, curr.y, localT);
    }
  }
  return PROFILE_POINTS[PROFILE_POINTS.length - 1].y;
}

function applyProfileToExtrusion(geometry, depth = 1) {
  geometry.computeBoundingBox();
  const bbox = geometry.boundingBox;
  const center = new THREE.Vector3();
  bbox.getCenter(center);
  const positions = geometry.attributes.position;

  for (let i = 0; i < positions.count; i += 1) {
    const z = positions.getZ(i);
    const t = THREE.MathUtils.clamp(z / depth, 0, 1);
    const scale = interpolateProfile(t);
    const x = positions.getX(i);
    const y = positions.getY(i);
    const scaledX = center.x + (x - center.x) * scale;
    const scaledY = center.y + (y - center.y) * scale;
    positions.setXYZ(i, scaledX, scaledY, z);
  }

  positions.needsUpdate = true;
  geometry.computeVertexNormals();
}

function computeVolume(geometry) {
  const position = geometry.attributes.position;
  let volume = 0;

  for (let i = 0; i < position.count; i += 3) {
    const v0 = new THREE.Vector3(
      position.getX(i),
      position.getY(i),
      position.getZ(i)
    );
    const v1 = new THREE.Vector3(
      position.getX(i + 1),
      position.getY(i + 1),
      position.getZ(i + 1)
    );
    const v2 = new THREE.Vector3(
      position.getX(i + 2),
      position.getY(i + 2),
      position.getZ(i + 2)
    );
    volume += v0.dot(v1.cross(v2));
  }

  return Math.abs(volume) / 6;
}

async function loadFont() {
  const fontPath = path.join(__dirname, 'assets', 'fonts', 'allison.woff');
  if (!fs.existsSync(fontPath)) {
    throw new Error('Fuente Allison no encontrada en backend/assets/fonts/allison.woff');
  }

  const loader = new FontLoader();
  try {
    const raw = fs.readFileSync(fontPath);
    const json = JSON.parse(raw.toString());
    return loader.parse(json);
  } catch (error) {
    throw new Error('No se pudo cargar la fuente .woff. Convierte a JSON con facetype.js o usa un .typeface.json.');
  }
}

function createBailGeometry(textBoundingBox) {
  const width = textBoundingBox.max.x - textBoundingBox.min.x;
  const height = textBoundingBox.max.y - textBoundingBox.min.y;
  const ringRadius = Math.max(width * 0.08, height * 0.12, 3);
  const tube = ringRadius * 0.35;
  const geometry = new THREE.TorusGeometry(ringRadius, tube, 24, 64);
  geometry.translate(0, textBoundingBox.max.y + ringRadius * 1.6, 0);
  return geometry;
}

async function generatePendantModel(name) {
  if (!validateName(name)) {
    throw new Error('Nombre inválido. Usa 3-10 letras A-Z.');
  }

  const font = await loadFont();
  const textGeometry = new TextGeometry(name, {
    font,
    size: 10,
    height: 1,
    curveSegments: 12,
    bevelEnabled: false,
  });

  textGeometry.computeBoundingBox();
  const initialBox = textGeometry.boundingBox;
  const initialHeight = initialBox.max.y - initialBox.min.y || 1;
  const scale = TARGET_HEIGHT_MM / initialHeight;
  textGeometry.scale(scale, scale, scale);
  textGeometry.computeBoundingBox();
  const bbox = textGeometry.boundingBox;
  const center = new THREE.Vector3();
  bbox.getCenter(center);
  textGeometry.translate(-center.x, -center.y, -center.z);

  applyProfileToExtrusion(textGeometry, 1 * scale);

  const bailGeometry = createBailGeometry(textGeometry.boundingBox);

  const mergedGeometry = mergeBufferGeometries([textGeometry, bailGeometry], false);
  mergedGeometry.computeVertexNormals();

  checkThickness(mergedGeometry, MIN_THICKNESS_MM);

  const volumeMm3 = computeVolume(mergedGeometry);
  const weightGrams = volumeMm3 * 0.0135;
  const price = weightGrams * GOLD_PRICE_PER_GRAM;

  const stlExporter = new STLExporter();
  const gltfExporter = new GLTFExporter();
  const stlData = stlExporter.parse(mergedGeometry, { binary: false });
  const glbData = await new Promise((resolve, reject) => {
    gltfExporter.parse(
      new THREE.Mesh(mergedGeometry, new THREE.MeshStandardMaterial()),
      (result) => resolve(result),
      (error) => reject(error),
      { binary: true }
    );
  });

  const timestamp = Date.now();
  const safeName = sanitizeName(name);
  const baseName = `${timestamp}_${safeName}`;
  const stlFilename = `${baseName}.stl`;
  const glbFilename = `${baseName}.glb`;

  fs.writeFileSync(path.join(generatedDir, stlFilename), stlData);
  fs.writeFileSync(path.join(generatedDir, glbFilename), Buffer.from(glbData));

  return {
    glbUrl: `/generated/${glbFilename}`,
    stlFilename,
    weight: Number(weightGrams.toFixed(2)),
    price: Number(price.toFixed(2)),
  };
}

app.post('/api/generate', async (req, res) => {
  try {
    const name = sanitizeName(req.body?.name);
    const result = await generatePendantModel(name);
    res.json({ success: true, ...result, downloadUrl: `/api/download/${result.stlFilename}` });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message || 'Error generando el modelo.' });
  }
});

app.get('/api/download/:filename', (req, res) => {
  const filename = path.basename(req.params.filename);
  const filePath = path.join(generatedDir, filename);
  if (!fs.existsSync(filePath)) {
    return res.status(404).json({ success: false, message: 'Archivo no encontrado.' });
  }
  return res.download(filePath, filename);
});

app.listen(PORT, () => {
  console.log(`14K Pendant Generator backend running on port ${PORT}`);
});

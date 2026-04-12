import * as THREE from 'three';

const DEFAULT_SAMPLES = 200;
const DEFAULT_MIN_THICKNESS = 1.4;

export function checkThickness(geometry, minThickness = DEFAULT_MIN_THICKNESS, samples = DEFAULT_SAMPLES) {
  if (!geometry || !geometry.attributes?.position) {
    throw new Error('Geometry inválida para validación de espesor.');
  }

  geometry.computeVertexNormals();
  const mesh = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial());
  const position = geometry.attributes.position;
  const normal = geometry.attributes.normal;
  const raycaster = new THREE.Raycaster();
  const maxIndex = position.count;
  let minObserved = Infinity;

  for (let i = 0; i < samples; i += 1) {
    const index = Math.floor(Math.random() * maxIndex);
    const vertex = new THREE.Vector3(
      position.getX(index),
      position.getY(index),
      position.getZ(index)
    );
    const dir = new THREE.Vector3(
      normal.getX(index),
      normal.getY(index),
      normal.getZ(index)
    ).normalize();

    const start = vertex.clone().addScaledVector(dir, 0.01);
    raycaster.set(start, dir);
    raycaster.far = 200;
    const hits = raycaster.intersectObject(mesh, false);

    if (hits.length > 0) {
      const distance = hits[0].distance;
      minObserved = Math.min(minObserved, distance);
      if (distance < minThickness) {
        throw new Error(`Espesor mínimo violado: ${distance.toFixed(2)}mm.`);
      }
    }
  }

  if (minObserved === Infinity) {
    throw new Error('No se pudo validar el espesor: malla sin intersecciones.');
  }

  return { minObserved };
}

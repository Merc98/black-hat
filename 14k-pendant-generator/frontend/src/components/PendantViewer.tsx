import { Suspense, useEffect, useMemo } from 'react';
import { Canvas, useLoader } from '@react-three/fiber';
import { Environment, OrbitControls } from '@react-three/drei';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { MeshPhysicalMaterial } from 'three';
import { RectAreaLightUniformsLib } from 'three/examples/jsm/lights/RectAreaLightUniformsLib.js';

type PendantViewerProps = {
  modelUrl: string;
};

function PendantModel({ modelUrl }: PendantViewerProps) {
  const gltf = useLoader(GLTFLoader, modelUrl);

  const material = useMemo(
    () =>
      new MeshPhysicalMaterial({
        color: '#f5d76e',
        roughness: 0.1,
        metalness: 1.0,
        clearcoat: 0.8,
        clearcoatRoughness: 0.1,
        envMapIntensity: 1.5,
      }),
    []
  );

  useEffect(() => {
    RectAreaLightUniformsLib.init();
  }, []);

  useEffect(() => {
    gltf.scene.traverse((child: any) => {
      if (child.isMesh) {
        child.material = material;
        child.castShadow = true;
        child.receiveShadow = true;
      }
    });
  }, [gltf, material]);

  return <primitive object={gltf.scene} />;
}

export default function PendantViewer({ modelUrl }: PendantViewerProps) {
  return (
    <Canvas camera={{ position: [0, 0, 50], fov: 45 }}>
      <ambientLight intensity={0.4} />
      <rectAreaLight
        position={[20, 20, 20]}
        width={10}
        height={10}
        intensity={15}
        color="#ffffff"
      />
      <rectAreaLight
        position={[-20, -20, 20]}
        width={10}
        height={10}
        intensity={15}
        color="#ffffff"
      />
      <Environment preset="studio" />
      <Suspense fallback={null}>
        <PendantModel modelUrl={modelUrl} />
      </Suspense>
      <OrbitControls enablePan={false} />
    </Canvas>
  );
}

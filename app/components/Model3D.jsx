"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { Suspense, useRef } from "react";

// Komponen model
function NametagModel() {
  const { scene } = useGLTF("/models/1.glb");
  const modelRef = useRef();

  // Animasi rotasi
  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y += 0.01; // kecepatan rotasi
    }
  });

  return <primitive ref={modelRef} object={scene} scale={1.5} />;
}

export default function Model3D() {
  return (
    <div style={{ width: "500px", height: "500px" }}>
      <Canvas camera={{ position: [0, 0, 2], fov: 9 }}>
        {/* Pencahayaan */}
        <ambientLight intensity={2} />
        <directionalLight position={[2, 5, 5]} />

        {/* Model 3D */}
        <Suspense fallback={null}>
          <NametagModel />
        </Suspense>

        {/* Kontrol interaktif */}
        <OrbitControls 
        enableZoom={true} 
        minDistance={5}
        maxDistance={10}
        />
      </Canvas>
    </div>
  );
}

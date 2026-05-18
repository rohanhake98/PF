"use client";

import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { useRef } from "react";

export default function CursorLight() {
  const lightRef = useRef<THREE.PointLight>(null);
  const { viewport } = useThree();

  useFrame((state) => {
    if (lightRef.current) {
      // Convert normalized mouse coordinates (-1 to 1) to viewport coordinates
      const x = (state.mouse.x * viewport.width) / 2;
      const y = (state.mouse.y * viewport.height) / 2;
      
      lightRef.current.position.set(x, y, 2);
    }
  });

  return (
    <>
      <pointLight 
        ref={lightRef} 
        color="#E5A93D" 
        intensity={2} 
        distance={10} 
        decay={2} 
      />
      {/* Secondary fixed light for depth */}
      <pointLight position={[-5, -5, -2]} color="#E05A33" intensity={1} />
    </>
  );
}

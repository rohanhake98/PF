"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { MeshDistortMaterial, Float, MeshWobbleMaterial } from "@react-three/drei";
import * as THREE from "three";

export default function NeuralCore() {
  const meshRef = useRef<THREE.Mesh>(null);
  const wireframeRef = useRef<THREE.Mesh>(null);
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (meshRef.current) {
      meshRef.current.rotation.x = time * 0.2;
      meshRef.current.rotation.y = time * 0.3;
    }
    if (wireframeRef.current) {
      wireframeRef.current.rotation.x = time * 0.2;
      wireframeRef.current.rotation.y = time * 0.3;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <group>
        {/* Inner Solid Core */}
        <mesh ref={meshRef}>
          <torusKnotGeometry args={[1, 0.3, isMobile ? 64 : 128, isMobile ? 16 : 32]} />
          <MeshDistortMaterial
            color="#161618"
            speed={2}
            distort={0.4}
            radius={1}
            emissive="#E05A33"
            emissiveIntensity={0.1}
            roughness={0.2}
            metalness={0.9}
          />
        </mesh>

        {/* Outer Glowing Wireframe */}
        <mesh ref={wireframeRef} scale={1.05}>
          <torusKnotGeometry args={[1, 0.3, isMobile ? 32 : 64, isMobile ? 8 : 16]} />
          <meshStandardMaterial
            color="#E5A93D"
            wireframe
            transparent
            opacity={0.15}
            emissive="#E5A93D"
            emissiveIntensity={0.5}
          />
        </mesh>

        {/* Dynamic Particles/Energy Nodes around core */}
        <Points />
      </group>
    </Float>
  );
}

function Points() {
  const pointsRef = useRef<THREE.Points>(null);
  const count = 500;
  
  const positions = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 10;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 10;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 10;
  }

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = state.clock.getElapsedTime() * 0.05;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.015}
        color="#E5A93D"
        transparent
        opacity={0.4}
        sizeAttenuation
      />
    </points>
  );
}

"use client";

import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Environment, ContactShadows } from "@react-three/drei";
import { EffectComposer, Bloom, Noise, Vignette } from "@react-three/postprocessing";
import NeuralCore from "./NeuralCore";
import CameraRig from "./CameraRig";
import CursorLight from "./CursorLight";

export default function Scene() {
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

  return (
    <Canvas
      shadows
      camera={{ position: [0, 0, 5], fov: 45 }}
      dpr={isMobile ? [1, 1.5] : [1, 2]} 
      gl={{ 
        antialias: !isMobile, 
        alpha: true,
        powerPreference: "high-performance"
      }}
    >
      <color attach="background" args={["#0A0A0B"]} />
      
      <ambientLight intensity={0.2} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
      
      <CursorLight />
      <CameraRig />

      <Suspense fallback={null}>
        <NeuralCore />
        <Environment preset="city" />
        <ContactShadows
          position={[0, -2.5, 0]}
          opacity={0.4}
          scale={10}
          blur={2}
          far={4.5}
        />
      </Suspense>

      <EffectComposer disableNormalPass>
        <Bloom 
          luminanceThreshold={1} 
          mipmapBlur 
          intensity={0.5} 
          radius={0.4} 
        />
        <Noise opacity={0.05} />
        <Vignette eskil={false} offset={0.1} darkness={1.1} />
      </EffectComposer>
    </Canvas>
  );
}

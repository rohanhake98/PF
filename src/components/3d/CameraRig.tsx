"use client";

import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { useRef } from "react";

export default function CameraRig() {
  const { camera } = useThree();
  const vec = new THREE.Vector3();

  useFrame((state) => {
    // 1. Mouse Parallax
    const mouseX = (state.mouse.x * 2);
    const mouseY = (state.mouse.y * 2);
    
    // 2. Scroll-based depth
    const scrollY = typeof window !== "undefined" ? window.scrollY : 0;
    const targetZ = 5 + (scrollY * 0.005);
    const targetY = -(scrollY * 0.002);

    camera.position.lerp(vec.set(mouseX, mouseY + targetY, targetZ), 0.05);
    camera.lookAt(0, 0, 0);
  });

  return null;
}

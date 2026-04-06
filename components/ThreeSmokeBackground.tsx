"use client";

import { useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Clouds, Cloud } from '@react-three/drei';
import * as THREE from 'three';

function SmokeSystem() {
  const groupRef = useRef<THREE.Group>(null);
  const scrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      scrollY.current = window.scrollY;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useFrame((state, delta) => {
    if (!groupRef.current) return;
    
    // Parallax logic: camera moves vertically/deeply through the smoke as you scroll
    // Interpolate camera for smooth effect
    const targetY = scrollY.current * 0.02;     // Move up (smoke appears to go down)
    const targetZ = 15 - (scrollY.current * 0.015); // Move forward through the smoke
    
    state.camera.position.y = THREE.MathUtils.lerp(state.camera.position.y, -targetY, 0.05);
    state.camera.position.z = THREE.MathUtils.lerp(state.camera.position.z, targetZ, 0.05);
    
    // Slowly rotate the entire cloud system for a drifting effect
    groupRef.current.rotation.y += delta * 0.05;
  });

  return (
    <group ref={groupRef}>
      <Clouds material={THREE.MeshLambertMaterial} limit={400}>
        <Cloud seed={1} bounds={[10, 2, 2]} volume={20} color="#555555" position={[0, 0, -5]} opacity={0.6} />
        <Cloud seed={2} bounds={[10, 2, 2]} volume={20} color="#222222" position={[5, 5, -10]} opacity={0.8} />
        <Cloud seed={3} bounds={[10, 2, 2]} volume={20} color="#111111" position={[-5, -5, 0]} opacity={0.5} />
      </Clouds>
    </group>
  );
}

export default function ThreeSmokeBackground() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none bg-black" aria-hidden="true">
      <Canvas camera={{ position: [0, 0, 15], fov: 60 }}>
        <ambientLight intensity={1.5} />
        <pointLight position={[0, 10, -10]} intensity={2} color="#ffffff" />
        <SmokeSystem />
      </Canvas>
    </div>
  );
}

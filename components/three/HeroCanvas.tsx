"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  AdaptiveDpr,
  Float,
  MeshDistortMaterial,
  PerformanceMonitor,
  Sparkles,
} from "@react-three/drei";
import type { Group, Mesh } from "three";

function Scene() {
  const group = useRef<Group>(null);
  const core = useRef<Mesh>(null);
  const shell = useRef<Mesh>(null);

  useFrame((state, delta) => {
    const d = Math.min(delta, 0.05);
    if (core.current) {
      core.current.rotation.y += d * 0.12;
      core.current.rotation.x += d * 0.08;
    }
    if (shell.current) {
      shell.current.rotation.y -= d * 0.07;
      shell.current.rotation.z += d * 0.03;
    }
    if (group.current) {
      const { x, y } = state.pointer;
      group.current.rotation.y += (x * 0.24 - group.current.rotation.y) * 0.025;
      group.current.rotation.x += (-y * 0.16 - group.current.rotation.x) * 0.025;
    }
  });

  return (
    <group ref={group} position={[1.5, 0, 0]}>
      <Float speed={1.1} rotationIntensity={0.28} floatIntensity={0.55}>
        <mesh ref={core} scale={1.05}>
          <sphereGeometry args={[1, 32, 32]} />
          <MeshDistortMaterial
            color="#6d63f5"
            emissive="#4f46e5"
            emissiveIntensity={0.55}
            roughness={0.35}
            metalness={0.2}
            distort={0.4}
            speed={0.9}
          />
        </mesh>
        <mesh ref={shell} scale={1.42}>
          <icosahedronGeometry args={[1, 2]} />
          <meshBasicMaterial color="#a5b4fc" wireframe transparent opacity={0.26} />
        </mesh>
      </Float>

      <Float speed={1.9} rotationIntensity={1} floatIntensity={1.4}>
        <mesh position={[2.1, 1.7, -0.3]} scale={0.26}>
          <torusGeometry args={[1, 0.42, 16, 32]} />
          <meshStandardMaterial color="#22d3ee" emissive="#0891b2" emissiveIntensity={0.4} roughness={0.35} />
        </mesh>
      </Float>

      <Float speed={1.5} rotationIntensity={0.8} floatIntensity={1.1}>
        <mesh position={[2.4, -1.9, -0.2]} scale={0.3}>
          <dodecahedronGeometry args={[1, 0]} />
          <meshStandardMaterial color="#a78bfa" emissive="#7c3aed" emissiveIntensity={0.35} roughness={0.35} />
        </mesh>
      </Float>

      <Sparkles count={16} scale={6} size={2} speed={0.2} color="#c7d2fe" opacity={0.6} />
    </group>
  );
}

export default function HeroCanvas() {
  return (
    <Canvas
      camera={{ position: [0, 0, 7], fov: 40 }}
      dpr={[1, 1.3]}
      gl={{ antialias: true, alpha: true, powerPreference: "low-power" }}
      frameloop="always"
    >
      <PerformanceMonitor>
        <AdaptiveDpr pixelated />
      </PerformanceMonitor>
      <ambientLight intensity={0.85} />
      <directionalLight position={[4, 5, 4]} intensity={1.3} />
      <pointLight position={[-4, -2, 2]} intensity={22} color="#22d3ee" />
      <pointLight position={[3, 3, 4]} intensity={18} color="#818cf8" />
      <Scene />
    </Canvas>
  );
}

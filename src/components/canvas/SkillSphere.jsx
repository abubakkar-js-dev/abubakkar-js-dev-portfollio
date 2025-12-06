"use client";
import { Text } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";

const skills = [
  "React", "Next.js", "TypeScript", "Node.js", "MongoDB", 
  "Tailwind", "Three.js", "Git", "Redux", "GraphQL",
  "Framer Motion", "Express", "Firebase", "Supabase"
];

const Word = ({ children, position, rotation }) => {
  const ref = useRef();
  
  useFrame(({ camera }) => {
    // Make text face camera
    ref.current.quaternion.copy(camera.quaternion);
  });

  return (
    <Text
      ref={ref}
      position={position}
      fontSize={0.5}
      color="#64ffda"
      anchorX="center"
      anchorY="middle"
    >
      {children}
    </Text>
  );
};

const Cloud = ({ count = 4, radius = 20 }) => {
  // Create a spherical distribution of words
  const words = useMemo(() => {
    const temp = [];
    const spherical = new THREE.Spherical();
    const phiSpan = Math.PI / (count + 1);
    const thetaSpan = (Math.PI * 2) / count;
    
    for (let i = 1; i < count + 1; i++) 
      for (let j = 0; j < count; j++) 
        temp.push([new THREE.Vector3().setFromSpherical(spherical.set(radius, phiSpan * i, thetaSpan * j)), skills[(i * count + j) % skills.length]]);
    return temp;
  }, [count, radius]);

  const groupRef = useRef();

  useFrame((state, delta) => {
      // Auto rotate
      if(groupRef.current) {
          groupRef.current.rotation.y += delta * 0.1;
          groupRef.current.rotation.x += delta * 0.05;
      }
  });

  return (
    <group ref={groupRef}>
      {words.map(([pos, word], index) => (
        <Word key={index} position={pos} >{word}</Word>
      ))}
    </group>
  );
};

const SkillSphere = () => {
  return (
    <div className="w-full h-[400px]">
      <Canvas camera={{ position: [0, 0, 10], fov: 50 }}>
        <fog attach="fog" args={["#0a192f", 10, 25]} />
        <Cloud count={4} radius={3.5} />
      </Canvas>
    </div>
  );
};

export default SkillSphere;

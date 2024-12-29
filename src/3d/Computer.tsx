import React from "react";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

type ComputerProps = {
  position: { x: number; y: number; z: number };
  scale?: number;
  rotation: { x: number; y: number; z: number };
};

export default function Computer({ position, scale, rotation }: ComputerProps) {
  const computer = useLoader(GLTFLoader, "/models/computer.glb");
  return (
    <mesh
      position={[position.x, position.y, position.z]}
      scale={scale}
      rotation={[rotation.x, rotation.y, rotation.z]}
    >
      <primitive object={computer.scene} />
      <meshPhongMaterial />
    </mesh>
  );
}

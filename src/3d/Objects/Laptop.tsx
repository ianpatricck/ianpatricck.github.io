import React from "react";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

type LaptopProps = {
  position: { x: number; y: number; z: number };
  scale: number;
  rotation: { x: number; y: number; z: number };
};

export default function Laptop({ position, scale, rotation }: LaptopProps) {
  const laptop = useLoader(GLTFLoader, "/models/laptop.glb");
  return (
    <mesh
      position={[position.x, position.y, position.z]}
      scale={scale}
      rotation={[rotation.x, rotation.y, rotation.z]}
    >
      <primitive object={laptop.scene} />;
    </mesh>
  );
}

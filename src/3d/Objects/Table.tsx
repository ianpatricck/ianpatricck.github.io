import React from "react";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

type TableProps = {
  position: { x: number; y: number; z: number };
  scale: number;
  rotation: { x: number; y: number; z: number };
};

export default function Table({ position, scale, rotation }: TableProps) {
  const table = useLoader(GLTFLoader, "/models/table.glb");
  return (
    <mesh
      position={[position.x, position.y, position.z]}
      scale={scale}
      rotation={[rotation.x, rotation.y, rotation.z]}
    >
      <primitive object={table.scene} />;
    </mesh>
  );
}

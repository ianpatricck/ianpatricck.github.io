import React from "react";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

type ShelfProps = {
  position: { x: number; y: number; z: number };
  scale: number;
  rotation: { x: number; y: number; z: number };
};

export default function Shelf({ position, scale, rotation }: ShelfProps) {
  const shelf = useLoader(GLTFLoader, "/models/shelf.glb");
  return (
    <mesh
      position={[position.x, position.y, position.z]}
      scale={scale}
      rotation={[rotation.x, rotation.y, rotation.z]}
    >
      <primitive object={shelf.scene} />;
    </mesh>
  );
}

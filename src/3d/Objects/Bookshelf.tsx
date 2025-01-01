import React from "react";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

type BookshelfProps = {
  position: { x: number; y: number; z: number };
  scale: number;
  rotation: { x: number; y: number; z: number };
};

export default function Bookshelf({ position, scale, rotation }: BookshelfProps) {
  const bookshelf = useLoader(GLTFLoader, "/models/bookshelf.glb");
  return (
    <mesh
      position={[position.x, position.y, position.z]}
      scale={scale}
      rotation={[rotation.x, rotation.y, rotation.z]}
    >
      <primitive object={bookshelf.scene} />;
    </mesh>
  );
}

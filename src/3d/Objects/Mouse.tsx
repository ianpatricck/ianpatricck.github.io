import React from "react";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

type MouseProps = {
  position: { x: number; y: number; z: number };
  scale: number;
  rotation: { x: number; y: number; z: number };
};

export default function Mouse({ position, scale, rotation }: MouseProps) {
  const mouse = useLoader(GLTFLoader, "/models/mouse.glb");
  return (
    <mesh
      position={[position.x, position.y, position.z]}
      scale={scale}
      rotation={[rotation.x, rotation.y, rotation.z]}
    >
      <primitive object={mouse.scene} />;
    </mesh>
  );
}

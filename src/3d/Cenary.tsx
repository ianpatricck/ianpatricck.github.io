import React from "react";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

type CenaryProps = {
  position: { x: number; y: number; z: number };
};

export default function Cenary({ position }: CenaryProps) {
  const cenary = useLoader(GLTFLoader, "/models/cenary.glb");
  return (
    <mesh position={[position.x, position.y, position.z]}>
      <primitive object={cenary.scene} />;
    </mesh>
  );
}

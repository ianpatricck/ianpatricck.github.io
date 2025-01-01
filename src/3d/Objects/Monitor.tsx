import React from "react";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

type MonitorProps = {
  position: { x: number; y: number; z: number };
  scale?: number;
  rotation: { x: number; y: number; z: number };
};

export default function Monitor({ position, scale, rotation }: MonitorProps) {
  const monitor = useLoader(GLTFLoader, "/models/monitor.glb");
  return (
    <mesh
      position={[position.x, position.y, position.z]}
      scale={scale}
      rotation={[rotation.x, rotation.y, rotation.z]}
    >
      <primitive object={monitor.scene} />
      <meshPhongMaterial />
    </mesh>
  );
}

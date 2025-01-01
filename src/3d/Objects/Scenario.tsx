import React from "react";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

type ScenarioProps = {
  position: { x: number; y: number; z: number };
};

export default function Scenario({ position }: ScenarioProps) {
  const scenario = useLoader(GLTFLoader, "/models/scenario.glb");
  return (
    <mesh position={[position.x, position.y, position.z]}>
      <primitive object={scenario.scene} />;
    </mesh>
  );
}

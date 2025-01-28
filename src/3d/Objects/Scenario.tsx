import React from "react";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

/*
 *  ScenarioProps
 *
 *  Tipo que as propriedades 'props' do componente Scenario recebem.
 *
 */

type ScenarioProps = {
  position: { x: number; y: number; z: number };
};

/*
 *  Componente Scenario
 *
 *  Componente principal que representa um objeto 3d.
 *
 */

export default function Scenario({ position }: ScenarioProps) {
  // Constante que carrega o modelo do objeto (glb).
  const scenario = useLoader(GLTFLoader, "/models/scenario.glb");

  /*
   *  Retorno do mesh
   *
   *  Retorna uma malha e exibe o objeto importado dentro de <primitive>.
   *
   */

  return (
    <mesh position={[position.x, position.y, position.z]}>
      <primitive object={scenario.scene} />;
    </mesh>
  );
}

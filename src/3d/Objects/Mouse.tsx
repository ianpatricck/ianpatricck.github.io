import React from "react";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

/*
 *  Vector Type
 *
 *  Tipo que representa um vetor em algumas propriedades
 *  como 'position' ou 'rotation'.
 *
 */

type Vector = {
  x: number;
  y: number;
  z: number;
};

/*
 *  MouseProps
 *
 *  Tipo que as propriedades 'props' do componente Mouse recebem.
 *
 */

type MouseProps = {
  position: Vector;
  scale: number;
  rotation: Vector;
};

/*
 *  Componente Mouse
 *
 *  Componente principal que representa um objeto 3d.
 *
 */

export default function Mouse({ position, scale, rotation }: MouseProps) {
  // Constante que carrega o modelo do objeto (glb).
  const mouse = useLoader(GLTFLoader, "/models/mouse.glb");

  /*
   *  Retorno do mesh
   *
   *  Retorna uma malha e exibe o objeto importado dentro de <primitive>.
   *
   */

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

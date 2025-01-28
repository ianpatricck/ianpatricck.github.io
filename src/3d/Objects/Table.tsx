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
 *  TableProps
 *
 *  Tipo que as propriedades 'props' do componente Table recebem.
 *
 */

type TableProps = {
  position: Vector;
  scale: number;
  rotation: Vector;
};

/*
 *  Componente Table
 *
 *  Componente principal que representa um objeto 3d.
 *
 */

export default function Table({ position, scale, rotation }: TableProps) {
  // Constante que carrega o modelo do objeto (glb).
  const table = useLoader(GLTFLoader, "/models/table.glb");

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
      <primitive object={table.scene} />;
    </mesh>
  );
}

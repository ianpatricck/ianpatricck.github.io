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
 *  ShelfProps
 *
 *  Tipo que as propriedades 'props' do componente Shelf recebem.
 *
 */

type ShelfProps = {
  position: Vector;
  scale: number;
  rotation: Vector;
};

/*
 *  Componente Shelf
 *
 *  Componente principal que representa um objeto 3d.
 *
 */

export default function Shelf({ position, scale, rotation }: ShelfProps) {
  // Constante que carrega o modelo do objeto (glb).
  const shelf = useLoader(GLTFLoader, "/models/shelf.glb");

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
      <primitive object={shelf.scene} />;
    </mesh>
  );
}

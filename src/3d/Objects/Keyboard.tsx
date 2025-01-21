import React, { useEffect, useRef, useState } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Mesh } from "three";

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
 *  KeyboardProps
 *
 *  Tipo que as propriedades 'props' do componente keyboard recebem.
 *
 */

type KeyboardProps = {
  position: Vector;
  scale: number;
  rotation: Vector;
};

/*
 *  Componente Keyboard
 *
 *  Componente principal que representa um objeto 3d.
 *
 */

export default function Keyboard({ position, scale, rotation }: KeyboardProps) {
  // Constante que carrega o modelo do objeto (glb).
  const keyboard = useLoader(GLTFLoader, "/models/keyboard.glb");

  // Referência da malha do objeto
  const ref = useRef<Mesh>(null);

  // Status a saber se o cursor do mouse pairou pelo objeto
  const [hovered, setHovered] = useState<boolean>(false);

  /*
   *  Hook useFrame
   *
   *  ação para definir a lógica de uma animação se o usuário
   *  pairou sobre o objeto.
   *
   */

  useFrame(() => {
    const delta = 0.01;
    const finalYPosition = position.y + 0.08;

    if (hovered && ref.current) {
      if (ref.current.position.y < finalYPosition) {
        ref.current.position.y += delta;
        ref.current.rotation.y -= delta;
      }
    } else {
      if (ref.current) {
        if (ref.current.position.y > position.y) {
          ref.current.position.y -= delta;
          ref.current.rotation.y += delta;
        }
      }
    }
  });

  /*
   *  Hook useEffect
   *
   *  Efeito necessário para alterar o cursor do mouse quando o usuário
   *  pairar sobre o objeto.
   *
   */

  useEffect(() => {
    document.body.style.cursor = hovered ? "pointer" : "auto";
  }, [hovered]);

  /*
   *  Retorno do mesh
   *
   *  Retorna uma malha e exibe o objeto importado dentro de <primitive>.
   *
   */

  return (
    <mesh
      ref={ref}
      position={[position.x, position.y, position.z]}
      scale={scale}
      rotation={[rotation.x, rotation.y, rotation.z]}
      onPointerOver={() => setHovered(true)}
      onPointerLeave={() => setHovered(false)}
    >
      <primitive object={keyboard.scene} />;
    </mesh>
  );
}

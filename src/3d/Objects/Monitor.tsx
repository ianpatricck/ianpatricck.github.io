import React, { useEffect, useRef, useState } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Mesh } from "three";
import { toDegree } from "../../utils/toDegree";

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
 *  MonitorProps
 *
 *  Tipo que as propriedades 'props' do componente monitor recebem.
 *
 */

type MonitorProps = {
  position: Vector;
  scale?: number;
  rotation: Vector;
};

/*
 *  Componente Monitor
 *
 *  Componente principal que representa um objeto 3d.
 *
 */

export default function Monitor({ position, scale, rotation }: MonitorProps) {
  // Constante que carrega o modelo do objeto (glb).
  const monitor = useLoader(GLTFLoader, "/models/monitor.glb");

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
    const delta = 0.025;

    if (hovered) {
      if (ref.current && ref.current.rotation.y > rotation.y - toDegree(30)) {
        ref.current.rotation.y -= delta;
      }
    } else {
      if (ref.current && ref.current.rotation.y <= rotation.y) {
        ref.current.rotation.y += delta;
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
      <primitive object={monitor.scene} />
      <meshPhongMaterial />
    </mesh>
  );
}

import { Environment, PerspectiveCamera } from "@react-three/drei";
import ThreeAmbient from "./Ambient";

/*
 *  Componente da cena principal
 *
 */

export default function Scene() {
  return (
    <>
      {/* Câmera */}
      <PerspectiveCamera
        makeDefault
        position={[-1.9, 4, -3.5]}
        rotation={[-0.7, -1, -0.6]}
      />

      {/* Detalhes de ambiente */}
      <ambientLight intensity={1} />
      <Environment preset="sunset" />

      {/* Ambiente completo do Three.js */}
      <ThreeAmbient />
    </>
  );
}

import { Environment, PerspectiveCamera } from "@react-three/drei";
import ThreeAmbient from "./Ambient";

export default function Scene() {
  return (
    <>
      {/* Main camera */}
      <PerspectiveCamera
        makeDefault
        position={[-1.5, 4, -2.6]}
        rotation={[-0.7, -1, -0.6]}
      />

      {/* Cenary details */}
      <ambientLight intensity={1} />
      <Environment preset="sunset" />

      {/* Main ambient */}
      <ThreeAmbient />
    </>
  );
}

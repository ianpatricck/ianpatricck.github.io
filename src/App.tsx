import { Environment, PerspectiveCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import AppModule from "./App.module.css";
import ThreeAmbient from "./3d/Ambient";

const Scene = () => {
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

      {/* Development settings */}
      <axesHelper args={[100]} />
    </>
  );
};

export default function App() {
  return (
    <div className={AppModule.wrapper}>
      <Canvas>
        <Scene />
      </Canvas>
    </div>
  );
}

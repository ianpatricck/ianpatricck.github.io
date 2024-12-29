import {
  Environment,
  OrbitControls,
  PerspectiveCamera,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import AppModule from "./App.module.css";
import Table from "./3d/Table";
import Chair from "./3d/Chair";
import Monitor from "./3d/Monitor";
import Keyboard from "./3d/Keyboard";
import Mouse from "./3d/Mouse";
import Computer from "./3d/Computer";
import Scenario from "./3d/Scenario";

const ThreeCenary = () => {
  return (
    <group scale={2}>
      <Scenario
        position={{
          x: 0,
          y: 0,
          z: 0,
        }}
      />
      <Table
        position={{
          x: 1.8,
          y: 0.02,
          z: -2.7,
        }}
        scale={0.3}
        rotation={{ x: 0, y: -1.6, z: 0 }}
      />
      <Chair
        position={{
          x: 1.8,
          y: 0.02,
          z: -1.4,
        }}
        scale={0.6}
        rotation={{ x: 0, y: 1.9, z: 0 }}
      />

      <Monitor
        position={{
          x: 1.8,
          y: 0.6,
          z: -2.7,
        }}
        scale={0.6}
        rotation={{ x: 0, y: 1.2, z: 0 }}
      />
      <Keyboard
        position={{
          x: 1.7,
          y: 0.62,
          z: -2.4,
        }}
        scale={0.6}
        rotation={{ x: 0, y: 1.5, z: 0 }}
      />
      <Mouse
        position={{
          x: 2.2,
          y: 0.62,
          z: -2.4,
        }}
        scale={0.07}
        rotation={{ x: 0, y: 0, z: 0 }}
      />
      <Computer
        position={{
          x: 2.5,
          y: 0.62,
          z: -2.6,
        }}
        scale={0.3}
        rotation={{ x: 0, y: -1.6, z: 0 }}
      />
    </group>
  );
};

const Scene = () => {
  return (
    <>
      {/* Main camera */}
      <PerspectiveCamera
        makeDefault
        position={[-1.5, 3, -1.5]}
        rotation={[-0.7, -1, -0.6]}
      />

      {/* Cenary details */}
      <ambientLight intensity={1} />
      <Environment preset="sunset" />

      {/* Main cenary */}
      <ThreeCenary />

      {/* Development settings */}

      <OrbitControls />
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

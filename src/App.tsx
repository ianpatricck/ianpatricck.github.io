import { Canvas } from "@react-three/fiber";
import AppModule from "./App.module.css";
import { Suspense } from "react";
import Scene from "./3d/Scene";

export default function App() {
  return (
    <Suspense fallback={null}>
      <div className={AppModule.wrapper}>
        <Canvas>
          <Scene />
        </Canvas>
      </div>
    </Suspense>
  );
}

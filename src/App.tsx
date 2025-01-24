import { Canvas } from "@react-three/fiber";
import AppModule from "./App.module.css";
import { Suspense } from "react";
import Scene from "./3d/Scene";
import Sidebar from "./layouts/Sidebar";
import Menu from "./layouts/Menu";

/*
 *  Componente principal da aplicação
 *
 *  Ponto de entrada para a exibição de layouts e
 *  a cena do elemento Canvas.
 *
 */

export default function App() {
  return (
    <Suspense fallback={null}>
      <div className={AppModule.wrapper}>
        <Sidebar />
        <Menu />
        <Canvas>
          <Scene />
        </Canvas>
      </div>
    </Suspense>
  );
}

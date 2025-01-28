import { Canvas } from "@react-three/fiber";
import AppModule from "./App.module.css";
import { Suspense } from "react";
import Scene from "./3d/Scene";
import Sidebar from "./layouts/Sidebar";
import Menu from "./layouts/Menu";
import { motion } from "motion/react";

/*
 *  Componente de carregamento
 *
 *  Exibe um simples elemente sinalizando que os componentes estão
 *  carregando.
 *
 */

function AppLoading() {
  return (
    <div className={AppModule.loading}>
      <motion.div
        className={AppModule.loading__element}
        animate={{ y: [0, -50, 0] }}
        transition={{ duration: 1.2, repeat: Infinity }}
      ></motion.div>
    </div>
  );
}

/*
 *  Componente principal da aplicação
 *
 *  Ponto de entrada para a exibição de layouts e
 *  a cena do elemento Canvas.
 *
 */

export default function App() {
  return (
    <div className={AppModule.wrapper}>
      <Suspense fallback={<AppLoading />}>
        <Sidebar />
        <Menu />
        <Canvas>
          <Scene />
        </Canvas>
      </Suspense>
    </div>
  );
}

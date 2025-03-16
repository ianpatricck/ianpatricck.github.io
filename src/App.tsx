import { Canvas } from "@react-three/fiber";
import AppModule from "./App.module.css";
import { Suspense } from "react";
import Scene from "./3d/Scene";
import Sidebar from "./layouts/Sidebar";
import Menu from "./layouts/Menu";
import { motion } from "motion/react";
import Modal from "./layouts/Modal";
import { useModal } from "./context/ModalContext";
import { useScreenDimensions } from "./hooks/useScreenDimensions";
import Mobile from "./layouts/Mobile/Mobile";

/*
 *  Componente de carregamento
 *
 *  Exibe um simples elemento sinalizando que os componentes estão
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
  const { isOpen } = useModal();
  const [width] = useScreenDimensions();

  return (
    <div className={AppModule.wrapper}>
      <Suspense fallback={<AppLoading />}>
        {isOpen ? <Modal /> : null}

        {width <= 850 ? (
          <>
            <Mobile />
          </>
        ) : (
          <>
            <Sidebar />
            <Menu />
            <Canvas>
              <Scene />
            </Canvas>
          </>
        )}
      </Suspense>
    </div>
  );
}

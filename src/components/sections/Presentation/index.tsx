import Style from "./Presentation.module.css";
import { motion } from "motion/react";

/*
 *  Componente de apresentação
 *
 *  Exibe a primeira informação sobre o autor.
 *
 */

export default function Presentation() {
  return (
    <motion.div
      className={Style.presentation}
      initial={{
        y: -100,
        opacity: 0,
      }}
      animate={{
        y: 0,
        transition: {
          duration: 0.4,
          ease: "easeInOut",
        },
      }}
      whileInView={{ opacity: 1 }}
    >
      <h1 className={Style.presentation__title}>
        Olá, meu nome é <br />
        <b>Ian Patrick.</b>
      </h1>
      <h2 className={Style.presentation__subtitle}>
        <span>
          <b>&lt;</b>
          Sou mais um pedreiro de código
          <b>/&gt;</b>
        </span>
      </h2>
    </motion.div>
  );
}

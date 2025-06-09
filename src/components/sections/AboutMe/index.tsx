import Text from "../../elements/Text";
import Topic from "../../elements/Topic";
import Style from "./AboutMe.module.css";
import { motion } from "motion/react";

/*
 *  Componente sobre o autor
 *
 *  Exibe uma descrição resumida sobre o autor.
 *
 */

export default function AboutMe() {
  return (
    <motion.div
      className={Style.about}
      initial={{
        x: -100,
        opacity: 0,
      }}
      animate={{
        transition: {
          duration: 0.6,
          ease: "easeIn",
        },
      }}
      whileInView={{ opacity: 1, x: 0 }}
    >
      <Topic>Sobre mim</Topic>

      <Text>
        Com +5 anos de experiência em desenvolvimento
        de software e bacharelado em ciências da computação, sou apaixonado por
        criar soluções robustas e escaláveis que resolvem problemas reais.
      </Text>
    </motion.div>
  );
}

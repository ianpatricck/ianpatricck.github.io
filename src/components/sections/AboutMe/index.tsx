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
        Com mais de 3 anos de experiência em desenvolvimento de web, sou
        apaixonado por criar soluções robustas, escaláveis e acima de tudo,
        resolver problemas. Desenvolvi e fiz parte de projetos que envolviam
        desde UI até banco de dados.
      </Text>
    </motion.div>
  );
}

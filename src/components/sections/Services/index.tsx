import Link from "../../elements/Link";
import Text from "../../elements/Text";
import Topic from "../../elements/Topic";
import Style from "./Services.module.css";
import { motion } from "motion/react";

/*
 *  Componente dos serviços prestados
 *
 *  Mostra uma descrição detalhada sobre os trabalhos
 *  que são realizados.
 *
 */

export default function Services() {
  return (
    <motion.div
      className={Style.services}
      initial={{
        y: 50,
        opacity: 0,
      }}
      animate={{
        y: 0,
        transition: {
          duration: 0.6,
          ease: "easeInOut",
        },
      }}
      whileInView={{ opacity: 1 }}
    >
      <Topic>O que eu faço?</Topic>

      <section className={Style.services_wrapper}>
        <div className={Style.services_wrapper__card}>
          <img src="/images/frontend.svg" alt="Front-End" />
          <p>
            Desenvolvimento
            <br />
            Front-End
          </p>
        </div>

        <div className={Style.services_wrapper__card}>
          <img src="/images/backend.svg" alt="Back-End" />
          <p>
            Desenvolvimento
            <br />
            Back-End
          </p>
        </div>

        {/*<div className={Style.services_wrapper__card}>
          <img src="/images/mobile.svg" alt="Mobile" />
          <p>Desenvolvimento Mobile</p>
        </div>*/}
      </section>

      <Text>
        Sou um programador com uma sólida experiência em desenvolvimento tanto
        no Back-End e Front-end além de Mobile, tenho me especializado em
        diversas tecnologias que permitem a criação de sistemas completos e de
        alta performance.
      </Text>

      <br />

      <Text>
        Em Back-End, tenho expertise em{" "}
        <Link href="https://www.php.net/">PHP</Link> e{" "}
        <Link href="https://nodejs.org/pt">Node.js</Link>, com foco nos
        frameworks <Link href="https://laravel.com/">Laravel</Link>,{" "}
        <Link href="https://symfony.com/">Symfony</Link> e{" "}
        <Link href="https://www.slimframework.com/">Slim</Link> para PHP, além
        dos populares como <Link href="https://expressjs.com/">Express.js</Link>{" "}
        e <Link href="https://nestjs.com/">Nest.js</Link> para Node.js. Com
        esses frameworks, consigo construir aplicações escaláveis, seguras e bem
        estruturadas, otimizando o desenvolvimento e a manutenção do código.
      </Text>

      <br />

      <Text>
        Em Front-End, minha principal ferramenta é o{" "}
        <Link href="https://react.dev/">React.js</Link> além dos primitivos
        HTML, CSS e JavaScript, que me permitem criar interfaces dinâmicas e
        interativas, oferecendo uma excelente experiência ao usuário. Ao longo
        dos anos, aprimorei minhas habilidades em trabalhar com APIs, integração
        entre Front-End e Back-End, e práticas modernas de desenvolvimento,
        sempre prezando pela performance e usabilidade.
      </Text>
    </motion.div>
  );
}

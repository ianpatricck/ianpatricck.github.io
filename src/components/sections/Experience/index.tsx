import ExperienceList from "../../elements/ExperienceList";
import Topic from "../../elements/Topic";
import Style from "./Experience.module.css";
import { motion } from "motion/react";

/*
 *  Componente de experiência profissional
 *
 *  Mostra uma lista a experiência profissional do autor em formato
 *  de lista.
 *
 */

export default function Experience() {
  return (
    <motion.div
      className={Style.experience}
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
        transition: {
          duration: 1,
          ease: "easeIn",
        },
      }}
    >
      <Topic>Experiência profissional</Topic>

      <section>
        <ExperienceList
          title="ESTAGIÁRIO PROGRAMADOR PHP"
          betweenText="Maio de 2025 - Trabalha atualmente"
          company="Replikante Experience Ltda"
          tasks={[
            "Atua na criação de aplicações de apoio aos robôs de atendimento ou para os clientes.",
            "Faz o consumo de APIs de terceiros para integração nos robôs com PHP.",
            "Ajuda na melhoria contínua dos processos de atendimento realizados pelos robôs utilizando a linguagem PHP.",
            "Contribui na comunicação com clientes para entendimento e execução de demandas.",
          ]}
        />

        <ExperienceList
          title="PROGRAMADOR FULL STACK PLENO"
          betweenText="Fevereiro de 2022 - Setembro de 2023"
          company="Bluelogic Sistemas"
          tasks={[
            "Atuou no Front-end com foco na geração de relatórios utilizando Vue.js na área administrativa da plataforma Plano Viva Saúde, uma plataforma de uma clínica de saúde que oferece atendimentos online.",
            "Desenvolveu parte de um sistema de cadastro e rotulagem para a plataforma Padroniza, uma plataforma que atua no ramo de segurança de alimentos e receitas, desenvolvendo o Front-End e Back-End utilizando Vue.js e Node.js com NestJS",
            "Contribuiu no aperfeiçoamento da API de Back-End do aplicativo DrOrto Clínica, uma clínica odontológica especializada em aparelhos ortodônticos e implantes dentários, atuou desenvolvendo novos endpoints e melhorando consultas ao banco de dados da plataforma utilizando Node.js e MongoDB.",
            "Migrou o código fonte da loja virtual de frutas e alimentos orgânicos Hort Fácil de HTML, CSS e JavaScript para Vue.js além de atuar na integração de seu Back-End construído no framework NestJS.",
          ]}
        />
      </section>
    </motion.div>
  );
}

import ProjectItem from "../../elements/ProjectItem";
import Topic from "../../elements/Topic";
import Style from "./Projects.module.css";
import { motion } from "motion/react";

/*
 *  Tipo ProjectCardProps
 *
 *  Tipo que define as propriedades do componente ProjectCard.
 *
 */

type ProjectCardProps = {
  image: string;
  title: string;
  description: string;
};

/*
 *  Componente do card para cada projeto
 *
 *  Exibe um item de projeto criado.
 *
 */

function ProjectCard({ image, title, description }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ x: -50 }}
      animate={{
        transition: {
          duration: 1.5,
          ease: "easeIn",
        },
      }}
      whileInView={{ x: 0 }}
    >
      <ProjectItem image={image}>
        <motion.div
          initial={{ x: -30, opacity: 0, scale: 0.8 }}
          animate={{
            x: 0,
            scale: 1,
            opacity: 1,
            transition: {
              duration: 0.2,
              ease: "easeIn",
            },
          }}
        >
          <h1>{title}</h1>
          <p>{description}</p>
        </motion.div>
      </ProjectItem>
    </motion.div>
  );
}

/*
 *  Componente de projetos
 *
 *  Mostra uma lista dos trabalhos criados pelo autor em formato
 *  de cartões interativos.
 *
 */

export default function Projects() {
  return (
    <motion.div
      className={Style.projects}
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
      <Topic>Trabalhos</Topic>

      <section className={Style.projects_wrapper}>
        <ProjectCard
          image="/images/cover-vanguarda.svg"
          title="Construtora Vanguarda"
          description="Site institucional desenvolvido para a Construtora Vanguarda,
              fundada em 2015, que se destaca como uma empresa inovadora e
              comprometida com a excelência em todas as etapas de seus projetos.
              Com uma equipe dedicada e experiente, a Vanguarda oferece soluções
              de construção que combinam qualidade, sustentabilidade e design
              contemporâneo."
        />
        <ProjectCard
          image="/images/cover-burgers.svg"
          title="Burgers restaurant"
          description="Burgers restaurant, plataforma web e intuitiva para escolha e
              compra de pratos online. O usuário pode navegar por diferentes
              categorias de pratos, adicionar itens ao carrinho, personalizar
              pedidos e realizar pagamentos de forma simples e segura. Além
              disso, oferece recursos como avaliações de pratos, histórico de
              compras e sugestões personalizadas. A interface é amigável e a
              plataforma é acessível em dispositivos móveis e desktops."
        />
      </section>
    </motion.div>
  );
}

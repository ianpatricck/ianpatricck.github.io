import Topic from "../../elements/Topic";
import Style from "./Techs.module.css";
import { motion } from "motion/react";

/*
 *  Componente das tecnologias
 *
 *  Exibe um container de tecnologias e ferramentas
 *  nas quais o autor possui proficiência.
 *
 */

export default function Techs() {
  // Lista de habilidades que o autor possui.
  const mystack: string[] = [
    "c",
    "cpp",
    "php",
    "nodejs",
    "express",
    "nest",
    "graphql",
    "laravel",
    "symfony",
    "nginx",
    "npm",
    "redis",
    "mongodb",
    "mysql",
    "sqlite",
    "postgres",
    "rabbitmq",
    "heroku",
    "aws",
    "kubernetes",
    "docker",
    "prisma",
    "sequelize",
    "vercel",
    "firebase",
    "jest",
    "githubactions",
    "html",
    "js",
    "ts",
    "css",
    "bootstrap",
    "tailwindcss",
    "sass",
    "vite",
    "styledcomponents",
    "materialui",
    "react",
    "webpack",
    "babel",
    "redux",
    "figma",
    "jest",
    "cypress",
    "electron",
    "threejs",
    "vitest",
  ];

  return (
    <motion.div
      className={Style.techs}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1, transition: { duration: 1 } }}
    >
      <Topic>Conhecimentos técnicos</Topic>

      <div className={Style.techs_wrapper}>
        {mystack.map((tech, index) => (
          <img
            key={index}
            src={"https://skillicons.dev/icons?i=" + tech}
            alt={tech}
          />
        ))}
      </div>
    </motion.div>
  );
}

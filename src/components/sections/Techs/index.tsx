import Topic from "../../elements/Topic";
import Style from "./Techs.module.css";

export default function Techs() {
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
    <div className={Style.techs}>
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
    </div>
  );
}

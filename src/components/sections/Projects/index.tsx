import ProjectItem from "../../elements/ProjectItem";
import Topic from "../../elements/Topic";
import Style from "./Projects.module.css";

export default function Projects() {
  return (
    <div className={Style.projects}>
      <Topic>Trabalhos</Topic>

      <section className={Style.projects_wrapper}>
        <ProjectItem image="/images/cover-vanguarda.svg">
          <h1>Construtora Vanguarda</h1>
          <p>
            Site institucional desenvolvido para a Construtora Vanguarda,
            fundada em 2015, que se destaca como uma empresa inovadora e
            comprometida com a excelência em todas as etapas de seus projetos.
            Com uma equipe dedicada e experiente, a Vanguarda oferece soluções
            de construção que combinam qualidade, sustentabilidade e design
            contemporâneo.
          </p>
        </ProjectItem>

        <ProjectItem image="/images/cover-burgers.svg">
          <h1>Burgers restaurant</h1>
          <p>
            Burgers restaurant, plataforma web e intuitiva para escolha e compra
            de pratos online. O usuário pode navegar por diferentes categorias
            de pratos, adicionar itens ao carrinho, personalizar pedidos e
            realizar pagamentos de forma simples e segura. Além disso, oferece
            recursos como avaliações de pratos, histórico de compras e sugestões
            personalizadas. A interface é amigável e a plataforma é acessível em
            dispositivos móveis e desktops.
          </p>
        </ProjectItem>
      </section>
    </div>
  );
}

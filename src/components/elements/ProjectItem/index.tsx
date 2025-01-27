import React, { useState } from "react";
import Style from "./ProjectItem.module.css";

/*
 *  Tipagem das propriedades do componente
 *
 */

type ProjectItemProps = {
  image: string;
  children: React.ReactNode;
};

/*
 *  Componente de um item de projeto
 *
 *  Representa o conteúdo inserido dentro do componente 'Projects'.
 *
 */

export default function ProjectItem({ image, children }: ProjectItemProps) {
  // imagem a ser exibida ao fundo do item
  const [background, setBackground] = useState<string>(`url(${image})`);

  // constante que verifica se o conteúdo está visível na tela
  const [contentIsDisplayed, setContentIsDisplayed] = useState<boolean>(false);

  // função chamada quando o cursor paira sobre o item
  function projectItemEnter() {
    const darkBackground = `linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.9)), url(${image})`;

    setBackground(darkBackground);
    setContentIsDisplayed(true);
  }

  // função chamada quando o cursor está fora do item
  function projectItemLeave() {
    setBackground(`url(${image})`);
    setContentIsDisplayed(false);
  }

  return (
    <article
      className={Style.project}
      style={{ backgroundImage: background }}
      onMouseEnter={projectItemEnter}
      onMouseLeave={projectItemLeave}
    >
      {contentIsDisplayed ? (
        <div className={Style.project_body}>{children}</div>
      ) : null}
    </article>
  );
}

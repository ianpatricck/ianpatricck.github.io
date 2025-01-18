import React, { useState } from "react";
import Style from "./ProjectItem.module.css";

type ProjectItemProps = {
  image: string;
  children: React.ReactNode;
};

export default function ProjectItem({ image, children }: ProjectItemProps) {
  const [background, setBackground] = useState<string>(`url(${image})`);
  const [contentIsDisplayed, setContentIsDisplayed] = useState<boolean>(false);

  function projectItemEnter() {
    const darkBackground = `linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.9)), url(${image})`;

    setBackground(darkBackground);
    setContentIsDisplayed(true);
  }

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

import React from "react";
import Style from "./Link.module.css";

/*
 *  Tipagem do Link
 *
 */
type TextProps = {
  href: string;
  children: React.ReactNode;
};

/*
 *  Componente de Link
 *
 *  Apenas cria um link personalizado e retorna o componente.
 *
 */

export default function Link({ href, children }: TextProps) {
  return (
    <a href={href} target="_blank" className={Style.link}>
      {children}
    </a>
  );
}

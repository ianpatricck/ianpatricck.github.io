import { ReactNode } from "react";
import Style from "./Text.module.css";

/*
 *  Componente de texto
 *
 *  Retorna um elemento parágrafo (p) estilizado.
 *
 */

export default function Text({ children }: { children: ReactNode }) {
  return <p className={Style.text}>{children}</p>;
}

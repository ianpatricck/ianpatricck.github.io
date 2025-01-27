import { ReactNode } from "react";
import Style from "./Topic.module.css";

/*
 *  Componente de tópico
 *
 *  Retorna um elemento título (h1) personalizado.
 *
 */

export default function Topic({ children }: { children: ReactNode }) {
  return (
    <h1 className={Style.topic}>
      <b>#</b> <span>{children}</span>
    </h1>
  );
}

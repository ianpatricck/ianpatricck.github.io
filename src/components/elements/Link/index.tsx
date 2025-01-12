import React from "react";
import Style from "./Link.module.css";

type TextProps = {
  href: string;
  children: React.ReactNode;
};

export default function Link({ href, children }: TextProps) {
  return (
    <a href={href} target="_blank" className={Style.link}>
      {children}
    </a>
  );
}

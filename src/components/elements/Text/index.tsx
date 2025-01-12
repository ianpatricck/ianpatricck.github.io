import React from "react";
import Style from "./Text.module.css";

type TextProps = {
  children: React.ReactNode;
};

export default function Text({ children }: TextProps) {
  return <p className={Style.text}>{children}</p>;
}

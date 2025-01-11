import { ReactNode } from "react";
import Style from "./Topic.module.css";

type TopicProps = {
  children: ReactNode;
};

export default function Topic({ children }: TopicProps) {
  return (
    <h1 className={Style.topic}>
      <b>#</b> <span>{children}</span>
    </h1>
  );
}

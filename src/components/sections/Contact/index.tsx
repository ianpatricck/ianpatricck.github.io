import React from "react";
import Style from "./Contact.module.css";
import Topic from "../../elements/Topic";

export default function Contact() {
  return (
    <div className={Style.contact}>
      <Topic>Minhas redes & Contato</Topic>

      <ul className={Style.contact_links}>
        <li className={Style.contact_item}>
          <img src="/images/icon-email.svg" alt="LinkedIn" />
          <span className={Style.contact_item__text}>
            contatoianpatrick@gmail.com
          </span>
        </li>

        <li className={Style.contact_item}>
          <img src="/images/icon-linkedin.svg" alt="LinkedIn" />
          <a
            className={Style.contact_item__text}
            href="https://www.linkedin.com/in/ianpatricck/"
            target="_blank"
          >
            linkedin.com/in/ianpatricck
          </a>
        </li>

        <li className={Style.contact_item}>
          <img src="/images/icon-github.svg" alt="Github" />
          <a
            className={Style.contact_item__text}
            href="https://github.com/ianpatricck"
            target="_blank"
          >
            github.com/ianpatricck
          </a>
        </li>
      </ul>
    </div>
  );
}

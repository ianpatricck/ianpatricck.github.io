import { useRef } from "react";
import Style from "./Modal.module.css";
import { useClickOutside } from "../../hooks/useClickOutside";
import { useModal } from "../../context/ModalContext";
import { motion } from "motion/react";

function ModalHeader({ repo, url }: { repo?: string; url?: string }) {
  return (
    <>
      {repo || url ? (
        <header>
          {url ? (
            <a className={Style.modal__link} href={url} target="_blank">
              <img src="/images/icon-internet.svg" alt="Website" />
              Visitar projeto
            </a>
          ) : null}

          {repo ? (
            <a className={Style.modal__link} href={repo} target="_blank">
              <img src="/images/icon-sourcecode.svg" alt="Source code" />
              Ver código-fonte
            </a>
          ) : null}
        </header>
      ) : null}
    </>
  );
}

export default function Modal() {
  const ref = useRef<HTMLDivElement>(null);
  const { setIsOpen, content } = useModal();

  useClickOutside(ref, () => {
    setIsOpen(false);
  });

  return (
    <motion.div
      initial={{ opacity: 0, bottom: 100 }}
      animate={{ opacity: 1, bottom: 0, transition: { duration: 0.4 } }}
      className={Style.modal}
    >
      <div ref={ref} className={Style.modal__item}>
        <ModalHeader repo={content.repo} url={content.url} />

        <img
          className={Style.modal__background}
          src={content.image}
          alt="Background"
        />
      </div>
    </motion.div>
  );
}

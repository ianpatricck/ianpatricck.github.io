import ArticleCard from "../../elements/ArticleCard";
import Topic from "../../elements/Topic";
import Style from "./Articles.module.css";
import { items } from "./data";
import { motion } from "motion/react";

/*
 *  Componente de artigos
 *
 *  Exibe uma lista de artigos que o autor escreveu.
 *
 */

export default function Articles() {
  return (
    <motion.div
      className={Style.articles}
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
        transition: {
          duration: 0.5,
          ease: "easeIn",
        },
      }}
    >
      <Topic>Artigos</Topic>
      <div className={Style.articles_container}>
        {items.map((article, key) => (
          <motion.div
            key={key}
            initial={{ x: -50 }}
            animate={{
              transition: {
                duration: 1.5,
                ease: "easeIn",
              },
            }}
            whileInView={{ x: 0 }}
          >
            <ArticleCard
              image={article.image}
              title={article.title}
              from={article.from}
              url={article.url}
            />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

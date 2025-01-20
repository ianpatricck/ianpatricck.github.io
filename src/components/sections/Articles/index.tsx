import ArticleCard from "../../elements/ArticleCard";
import Topic from "../../elements/Topic";
import Style from "./Articles.module.css";
import { items } from "./data";

export default function Articles() {
  return (
    <div className={Style.articles}>
      <Topic>Artigos</Topic>
      <div className={Style.articles_container}>
        {items.map((article, key) => (
          <ArticleCard
            key={key}
            image={article.image}
            title={article.title}
            from={article.from}
            url={article.url}
          />
        ))}
      </div>
    </div>
  );
}

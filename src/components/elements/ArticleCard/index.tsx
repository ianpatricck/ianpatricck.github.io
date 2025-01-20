import Style from "./ArticleCard.module.css";

type ArticleCardProps = {
  image: string;
  title: string;
  from: string;
  url: string;
};

export default function ArticleCard({ image, title, from,  url }: ArticleCardProps) {
  return (
    <a href={url} target="_blank" className={Style.card}>
      <img className={Style.card__image} src={image} alt={title} />

      <div className={Style.card_info}>
        <h1 className={Style.card__title}>{title}</h1>
        <span className={Style.card__from}>@{from}</span>
      </div>
    </a>
  );
}

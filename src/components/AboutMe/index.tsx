import Style from "./AboutMe.module.css";

export default function AboutMe() {
  return (
    <div className={Style.about}>
      <h1 className={Style.about__title}>
        <b>#</b> <span>Sobre mim</span>
      </h1>

      <p className={Style.about__description}>
        Com mais de 3 anos de experiência em desenvolvimento de web, sou
        apaixonado por criar soluções robustas, escaláveis e acima de tudo,
        resolver problemas. Desenvolvi e fiz parte de projetos que envolviam
        desde UI até banco de dados.
      </p>
    </div>
  );
}

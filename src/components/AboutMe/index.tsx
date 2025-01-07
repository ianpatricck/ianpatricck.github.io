import Style from "./AboutMe.module.css";

export default function AboutMe() {
  return (
    <div>
      <header className={Style.navbar}>
        <h1 className={Style.navbar__title}>
          Olá, meu nome é <br />
          <b>Ian Patrick.</b>
        </h1>
        <h2 className={Style.navbar__subtitle}>
          <span>
            <b>&lt;</b>
            Sou mais um pedreiro de código
            <b>/&gt;</b>
          </span>
        </h2>
      </header>

      <main className={Style.content}>
        <h1 className={Style.content__title}>
          <b>#</b> <span>Sobre mim</span>
        </h1>

        <p className={Style.content__description}>
          Com mais de 3 anos de experiência em desenvolvimento de web, sou
          apaixonado por criar soluções robustas, escaláveis e acima de tudo,
          resolver problemas. Desenvolvi e fiz parte de projetos que envolviam
          desde UI a banco de dados.
        </p>
      </main>
    </div>
  );
}

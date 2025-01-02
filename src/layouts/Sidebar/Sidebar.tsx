import {
  sidebar,
  title,
  subtitle,
  navbar,
  description,
} from "./Sidebar.module.css";

export default function Sidebar() {
  return (
    <aside className={sidebar}>
      <header className={navbar}>
        <h1 className={title}>
          Olá, meu nome é <br />
          Ian Patrick
        </h1>
        <h2 className={subtitle}>
          &lt;Sou apenas mais um pedreiro de código/&gt;
        </h2>
        <p className={description}>
          Com mais de 3 anos de experiência em desenvolvimento de web, sou
          apaixonado por criar soluções robustas, escaláveis e resolver
          problemas.
        </p>
      </header>
    </aside>
  );
}

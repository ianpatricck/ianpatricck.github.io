import Style from "./Presentation.module.css";

export default function Presentation() {
  return (
    <div className={Style.presentation}>
      <h1 className={Style.presentation__title}>
        Olá, meu nome é <br />
        <b>Ian Patrick.</b>
      </h1>
      <h2 className={Style.presentation__subtitle}>
        <span>
          <b>&lt;</b>
          Sou mais um pedreiro de código
          <b>/&gt;</b>
        </span>
      </h2>
    </div>
  );
}

import Style from "./Services.module.css";

export default function Services() {
  return (
    <div className={Style.services}>
      <h1 className={Style.services__title}>
        <b>#</b> <span>O que eu faço?</span>
      </h1>

      <div>
        <p>Desenvolvimento Front-End</p>
      </div>

      <div>
        <p>Desenvolvimento Back-End</p>
      </div>

      <div>
        <p>Desenvolvimento Mobile</p>
      </div>
    </div>
  );
}

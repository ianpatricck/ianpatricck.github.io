import Style from "./Services.module.css";

export default function Services() {
  return (
    <div className={Style.services}>
      <h1 className={Style.services__title}>
        <b>#</b> <span>O que eu faço?</span>
      </h1>

      <section className={Style.services_wrapper}>
        <div className={Style.services_wrapper__card}>
          <img src="/images/frontend.svg" alt="Front-End" />
          <p>Desenvolvimento Front-End</p>
        </div>

        <div className={Style.services_wrapper__card}>
          <img src="/images/backend.svg" alt="Back-End" />
          <p>Desenvolvimento Back-End</p>
        </div>

        <div className={Style.services_wrapper__card}>
          <img src="/images/mobile.svg" alt="Mobile" />
          <p>Desenvolvimento Mobile</p>
        </div>
      </section>
    </div>
  );
}

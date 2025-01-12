import Text from "../../elements/Text";
import Topic from "../../elements/Topic";
import Style from "./AboutMe.module.css";

export default function AboutMe() {
  return (
    <div className={Style.about}>
      <Topic>Sobre mim</Topic>

      <Text>
        Com mais de 3 anos de experiência em desenvolvimento de web, sou
        apaixonado por criar soluções robustas, escaláveis e acima de tudo,
        resolver problemas. Desenvolvi e fiz parte de projetos que envolviam
        desde UI até banco de dados.
      </Text>
    </div>
  );
}

import Style from "./ExperienceList.module.css";

/*
 *  Tipagem das propriedades do componente
 *
 */

type ExperienceListProps = {
  title: string;
  betweenText: string;
  company: string;
  tasks: string[];
};

/*
 *  Componente de um item de lista de experiência profissional
 *
 *  Representa o conteúdo inserido dentro do componente 'Experience'.
 *
 */

export default function ExperienceList(props: ExperienceListProps) {
  return (
    <div className={Style.experience_list}>
      <header className={Style.header}>
        <h1 className={Style.title}>{props.title}</h1>
        <small className={Style.duration}>{props.betweenText}</small>
      </header>
      <span className={Style.company}>{props.company}</span>
      <ul className={Style.tasks}>
        {props.tasks.map((task, key) => (
          <li key={key}>{task}</li>
        ))}
      </ul>
    </div>
  );
}

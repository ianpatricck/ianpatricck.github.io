import AboutMe from "../../components/sections/AboutMe";
import Articles from "../../components/sections/Articles";
import Contact from "../../components/sections/Contact";
import Presentation from "../../components/sections/Presentation";
import Experience from "../../components/sections/Experience";
import Services from "../../components/sections/Services";
import Techs from "../../components/sections/Techs";
import { sidebar } from "./Sidebar.module.css";

/*
 *  Sidebar
 *
 *  Layout que exibe todas as seções ao lado esquerdo
 *  da página.
 *
 */

export default function Sidebar() {
  return (
    <aside className={sidebar}>
      <Presentation />
      <AboutMe />
      <Services />
      <Experience />
      <Techs />
      <Articles />
      <Contact />
    </aside>
  );
}

import AboutMe from "../../components/sections/AboutMe";
import Articles from "../../components/sections/Articles";
import Contact from "../../components/sections/Contact";
import Presentation from "../../components/sections/Presentation";
import Projects from "../../components/sections/Projects";
import Services from "../../components/sections/Services";
import Techs from "../../components/sections/Techs";
import { sidebar } from "./Sidebar.module.css";

export default function Sidebar() {
  return (
    <aside className={sidebar}>
      <Presentation />
      <AboutMe />
      <Services />
      <Projects />
      <Techs />
      <Articles />
      <Contact />
    </aside>
  );
}

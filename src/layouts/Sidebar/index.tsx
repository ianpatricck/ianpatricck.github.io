import AboutMe from "../../components/sections/AboutMe";
import Presentation from "../../components/sections/Presentation";
import Services from "../../components/sections/Services";
import Techs from "../../components/sections/Techs";
import { sidebar } from "./Sidebar.module.css";

export default function Sidebar() {
  return (
    <aside className={sidebar}>
      <Presentation />
      <AboutMe />
      <Services />
      <Techs />
    </aside>
  );
}

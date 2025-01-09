import AboutMe from "../../components/AboutMe";
import Presentation from "../../components/Presentation";
import Services from "../../components/Services";
import { sidebar } from "./Sidebar.module.css";

export default function Sidebar() {
  return (
    <aside className={sidebar}>
      <Presentation />
      <AboutMe />
      <Services />
    </aside>
  );
}

import AboutMe from "../../components/AboutMe";
import { sidebar } from "./Sidebar.module.css";

export default function Sidebar() {
  return (
    <aside className={sidebar}>
      <AboutMe />
    </aside>
  );
}

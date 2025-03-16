import React from "react";
import MobileModule from "./Mobile.module.css";
import { PresentationMobile } from "../../components/sections/Presentation";
import AboutMe from "../../components/sections/AboutMe";
import Services from "../../components/sections/Services";
import Projects from "../../components/sections/Projects";
import Techs from "../../components/sections/Techs";
import Articles from "../../components/sections/Articles";
import Contact from "../../components/sections/Contact";

/*
 *  Componente pai para dispositivos menores
 *
 *  Será vísivel apenas ao alterar a largura da tela.
 *
 */

export default function Mobile() {
  return (
    <div className={MobileModule.wrapper}>
      <PresentationMobile />
      <AboutMe />
      <Services />
      <Projects />
      <Techs />
      <Articles />
      <Contact />
    </div>
  );
}

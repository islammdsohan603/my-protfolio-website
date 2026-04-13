// src/app/page.js
import Home from "../componetns/HomePages";
import AboutPages from "./about/page";
import SkillsPages from "./skills/page";

export default function Page() {
  return (
    <>
      <Home />
      <AboutPages />
      <SkillsPages />
    </>
  );
}
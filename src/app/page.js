// import Image from "next/image";
// import styles from "./page.module.css";

import Experience from "@/components/Home/Section/experience";
import Hero from "@/components/Home/Section/hero";
import Projects from "@/components/Home/Section/projects";
import Skills from "@/components/Home/Section/skills";
import Main from "@/components/layout/main";

export default function Home() {
  return (
    <div>
      <Main>
        <Hero />
        <Projects />
        <Skills />
        <Experience />
      </Main>
    </div>
  );
}

// import Image from "next/image";
// import styles from "./page.module.css";

import Experience from "@/components/Home/Section/experience";
import Hero from "@/components/Home/Section/hero";
import Skills from "@/components/Home/Section/skills";
import Main from "@/components/layout/main";

export default function Home() {
  return (
    <div>
      <Main>
        <Hero />
        <Skills />
        <Experience />
      </Main>
    </div>
  );
}

import About from "@/components/about/About";
import Contact from "@/components/contact/Contact";
import HomePage from "@/components/homepage/HomePage";
import Proyects from "@/components/proyects/Proyects";
import Skills from "@/components/skills/Skills";
import { NavBar } from "@/components/navbar/NavBar";

export default async function Home({ params: { lang } }) {
  const dictionary = await import(`@/app/dictionaries/${lang}.json`).then(
    (m) => m.default
  );
  return (
    <>
      <NavBar />
      <HomePage  />
      <About  />
      <Skills  />
      <Proyects />
      <Contact  />
    </>
  );
}


import About from "@/components/About";
import Contact from "@/components/Contact";
import Proyects from "@/components/Proyects";
import Skills from "@/components/Skills";
import { NavBar } from "@/components/navbar/NavBar";

export default async function Home({ params: { lang } }) {
  const dictionary = await import(`@/app/dictionaries/${lang}.json`).then(
    (m) => m.default
  );
  return <>
  <div>
    <NavBar/>
  </div>
  <div>
{dictionary.home.title}
  </div>
  <div>
<About/>
<Skills/>
<Proyects/>
<Contact/>
  </div>
  </>;
}

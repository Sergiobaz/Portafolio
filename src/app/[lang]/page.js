
import About from "@/components/about/About";
import Contact from "@/components/contact/Contact";
import HomePage from "@/components/homepage/HomePage";
import Proyects from "@/components/proyects/Proyects";
import Skills from "@/components/skills/Skills";
import { NavBar } from "@/components/navbar/NavBar";
import { Montserrat } from 'next/font/google'
 
const montserrat = Montserrat({
  weight: ['400', "200"],
  subsets: ['latin'],
})


export default async function Home({ params: { lang } }) {
  const dictionary = await import(`@/app/dictionaries/${lang}.json`).then(
    (m) => m.default
  );

  

  return (
    <main className={montserrat.className} >
      <NavBar dictionary={dictionary} />
      <HomePage dictionary={dictionary} />
      <About dictionary={dictionary} />
      <Skills dictionary={dictionary} />
      <Proyects dictionary={dictionary}/>
      <Contact dictionary={dictionary} />
    </main>
  );
}

import { useState } from "react";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import { LANGUAJES } from "./dictionaries/languajes";
import Projects from "./components/Projects";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const [languaje, setLanguaje] = useState(LANGUAJES.en);

  const toggleLanguaje = () => {
    setLanguaje((prevLanguaje) =>
      prevLanguaje === LANGUAJES.en ? LANGUAJES.es : LANGUAJES.en
    );
  };

  return (
    <>
      <NavBar
        languaje={languaje}
        toggleLanguaje={toggleLanguaje}
      />
      <Home languaje={languaje} />

      <Projects languaje={languaje} />

      <AboutMe languaje={languaje} />

      <Skills languaje={languaje} />

      <Contact languaje={languaje} />

      <Footer languaje={languaje} />
    </>
  );
}

export default App;

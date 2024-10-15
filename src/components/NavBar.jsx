import { useState } from "react";
import github from "../icons/github.png";
import linkedin from "../icons/linkedin.png";
import { LINKS } from "../data/links";

const NavBar = ({ languaje, toggleLanguaje }) => {
  const { home, about, project, skills, contact } = languaje.menu;
  const [menu, setMenu] = useState(false);

  const toggleMenu = () => {
    setMenu((prevstate) => !prevstate);
  };

  return (
    <header className="fixed z-10 bg-[#0D0E10] w-full border-b lg:flex lg:justify-center scroll-smooth ">
      <menu className=" hidden lg:flex my-5 space-x-6 pt-1">
        <a className=" cursor-pointer " href="#home">
          {home}
        </a>
        <a className=" cursor-pointer " href="#projects">
          {project}
        </a>
        <a className=" cursor-pointer " href="#about">
          {about}
        </a>
        <a className=" cursor-pointer " href="#skills">
          {skills}
        </a>
        <a className=" cursor-pointer " href="#contact ">
          {contact}
        </a>
      </menu>
      <div className=" flex justify-between lg:absolute lg:top-3 lg:right-6">
        <button onClick={toggleLanguaje} className=" p-3 ">
          EN | ES
        </button>
        <div className="lg:hidden ">
          <button onClick={toggleMenu} className=" p-3 ">
            <img src="/Header/Menu.svg" alt="" />
          </button>
        </div>
      </div>
      {menu && (
        <div className="  w-[100vw] h-[100vh] space-y-[5vh] ml-8 font-normal mt-16 text-lg lg:hidden flex flex-col ">
          <a className=" border-b " href="#home" onClick={toggleMenu}>
            {home}
          </a>
          <a className=" border-b " href="#projects" onClick={toggleMenu}>
            {project}
          </a>
          <a className=" border-b " href="#about" onClick={toggleMenu}>
            {about}
          </a>
          <a className=" border-b " href="#skills" onClick={toggleMenu}>
            {skills}
          </a>
          <a className=" border-b " href="#contact" onClick={toggleMenu}>
            {contact}
          </a>
          <a className=" border-b ">{languaje.home.calltoaction1}</a>
          <div className=" pt-10 flex justify-center mr-20 space-x-4 items-center">
            <a href={LINKS.gitHub} target="_blank">
              <img className="w-8 h-8 aspect-square" src={github} />
            </a>
            <a href={LINKS.linkedIn} target="_blank">
              <img className="w-10 h-10" src={linkedin} />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
export default NavBar;

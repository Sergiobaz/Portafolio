"use client";

import useScreenSize from "@/components/Hooks/useScreenSize";
import Desktop from "./desktop/Desktop";
import Mobile from "./mobile/Mobile";


export const Menu = ({dictionary}) => {
  const LINKS = [
    { title: dictionary.navbar.homepage, path: "#homepage" },
    { title: dictionary.navbar.about, path: "#about" },
    { title: dictionary.navbar.skills, path: "#skills" },
    { title: dictionary.navbar.proyects, path: "#proyects" },
    { title: dictionary.navbar.contact, path: "#contact" },
  ];
  let screenWidth = useScreenSize();
  return <>{screenWidth.width > 768 ? <Desktop item={LINKS}/> : <Mobile item={LINKS} />}</>;
};

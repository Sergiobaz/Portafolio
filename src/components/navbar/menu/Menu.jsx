"use client";

import useScreenSize from "@/components/Hooks/useScreenSize";
import Desktop from "./desktop/Desktop";
import Mobile from "./mobile/Mobile";

const LINKS = [
  { title: "Home Page", path: "#homepage" },
  { title: "About", path: "#about" },
  { title: "Skills", path: "#skills" },
  { title: "Proyects", path: "#proyects" },
  { title: "Contact", path: "#contact" },
];
export const Menu = () => {
  let screenWidth = useScreenSize();
  return <>{screenWidth.width > 768 ? <Desktop item={LINKS}/> : <Mobile item={LINKS} />}</>;
};

import { Darkmode } from "./Darkmode";
import { Languaje } from "./Languaje";
import { Menu } from "./Menu";

export const NavBar = () => {
  return (
    <>
      <div>LOGO</div>
      <div><Languaje/></div>
      <div><Darkmode/></div>
      <div><Menu/></div>
    </>
  );
};

import { Darkmode } from "./darkmode/Darkmode";
import { Languaje } from "./langaje/Languaje";
import { Menu } from "./menu/Menu";
import styles from "./navbar.module.css";

export const NavBar = () => {
  return (
    <div className={styles.container}>
      <a href="#homepage">LOGO</a>
      <div>
        <Darkmode />
      </div>
      <div>
        <Languaje />
      </div>
      <div>
        <Menu />
      </div>
    </div>
  );
};

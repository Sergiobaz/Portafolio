import Image from "next/image";
import { useState } from "react";
import MenuNavLink from "./menunavlink/MenuNavLink";
import styles from "./mobile.module.css";

const Mobile = ({ item }) => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setOpen((prev) => !prev)}>menu</button>
      {open && (
        <div className={styles.container} >
          {item.map((link) => (
            <MenuNavLink setOpen={setOpen} item={link} key={link.title} />
          ))}
          <div>
            <a
              href="https://www.linkedin.com/in/sergio-bazan-27967b211/"
              target="_blank"
            >
              <Image
                src="/logotipo-de-linkedin.png"
                width={30}
                height={30}
                alt=""
              />
            </a>
            <a href="https://github.com/Sergiobaz" target="_blank">
              {" "}
              <Image src="/github.png" width={30} height={30} alt="" />
            </a>
            <a href=""> Curriculum </a>
          </div>
        </div>
      )}
    </div>
  );
};
export default Mobile;

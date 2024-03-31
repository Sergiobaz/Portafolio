import Image from "next/image";
import { useState } from "react";
import MenuNavLink from "./menunavlink/MenuNavLink";
import styles from "./mobile.module.css";

const Mobile = ({ item }) => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button
        onClick={() => setOpen((prev) => !prev)}
        className={styles.button}
      >
        <Image alt="menu" width={30} height={30} src={"/icons/menu.svg"} />
      </button>
      {open && (
        <div className={styles.container}>
          {item.map((link) => (
            <MenuNavLink setOpen={setOpen} item={link} key={link.title} />
          ))}
          <div>
            <a href="mailto:bazan.sergio2399@gmail.com" target="_blank">
              <Image src="/icons/mail.svg" width={30} height={30} alt="" />
            </a>
            <a
              href="https://www.linkedin.com/in/sergio-bazan-27967b211/"
              target="_blank"
            >
              <Image
                src="/icons/logotipo-de-linkedin.png"
                width={30}
                height={30}
                alt=""
              />
            </a>
            <a href="https://github.com/Sergiobaz" target="_blank">
              {" "}
              <Image src="/icons/github.png" width={30} height={30} alt="" />
            </a>
            <a href=""> Curriculum </a>
          </div>
        </div>
      )}
    </div>
  );
};
export default Mobile;

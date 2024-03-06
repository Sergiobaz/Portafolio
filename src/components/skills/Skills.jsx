import Image from "next/image";
import styles from "./skills.module.css";

const Skills = () => {
  const LOGOS = [
    { name: "Docker", src: "/Skills/docker.png" },
    { name: "Css", src: "/Skills/css.png" },
    { name: "Express", src: "/Skills/express.png" },
    { name: "Git", src: "/Skills/git.png" },
    { name: "Github", src: "/Skills/github.png" },
    { name: "Html", src: "/Skills/html.png" },
    { name: "Javascript", src: "/Skills/js.png" },
    { name: "Nextjs", src: "/Skills/nextjs.png" },
    { name: "Nodejs", src: "/Skills/nodejs.png" },
    { name: "Postgresql", src: "/Skills/posgresql.png" },
    { name: "React", src: "/Skills/react.png" },
    { name: "Tailwind", src: "/Skills/tailwind.png" },
    { name: "Typescript", src: "/Skills/ts.png" },
    { name: "Vite", src: "/Skills/vite.png" },
  ];

  return (
    <div id="skills" className={styles.container}>
      {LOGOS.map((logo) => (
        <div key={logo.name} className={styles.logo} >
          <Image alt="" width={25} height={25} src={logo.src}></Image>
          <p>{logo.name}</p>
        </div>
      ))}
    </div>
  );
};

export default Skills;

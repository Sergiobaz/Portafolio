import Image from "next/image";
import styles from "./skills.module.css";

const LANGAUJES = [
  { name: "Javascript", src: "/Skills/js.png" },
  { name: "Typescript", src: "/Skills/ts.png" },
];

const FRONT_END = [
  { name: "Html", src: "/Skills/html.png" },
  { name: "Css", src: "/Skills/css.png" },
  { name: "Tailwind", src: "/Skills/tailwind.png" },
  { name: "React", src: "/Skills/react.png" },
  { name: "Nextjs", src: "/Skills/nextjs.png" },
  { name: "Vite", src: "/Skills/vite.png" },
];

const BACK_END = [
  { name: "Nodejs", src: "/Skills/nodejs.png" },
  { name: "Express", src: "/Skills/express.png" },
  { name: "Postgresql", src: "/Skills/posgresql.png" },
  { name: "Zod", src: "/Skills/zod.svg" },
  { name: "Sequelize", src: "/Skills/sequelize.png" }
];

const DEVOPS = [
  { name: "Github", src: "/Skills/github.png" },
  { name: "Git", src: "/Skills/git.png" },
  { name: "Docker", src: "/Skills/docker.png" },
];

const Skills = () => {
  return (
    <div id="skills" className={styles.container}>
      <div className={styles.languaje}>
        <h4>Languages and SuperSets</h4>
        <div className={styles.languajeIcons} >
          {LANGAUJES.map((logo) => (
            <div key={logo.name} className={styles.logo}>
              <Image alt="" width={25} height={25} src={logo.src}></Image>
              <p>{logo.name}</p>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.front_end}>
        <h4>Front-end</h4>
        <div className={styles.front_endIcons} >  
          {FRONT_END.map((logo) => (
            <div key={logo.name} className={styles.logo}>
              <Image alt="" width={25} height={25} src={logo.src}></Image>
              <p>{logo.name}</p>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.back_end} >
        <h4>Back-end</h4>
        <div className={styles.back_endIcons} >
          {BACK_END.map((logo) => (
            <div key={logo.name} className={styles.logo}>
              <Image alt="" width={25} height={25} src={logo.src}></Image>
              <p>{logo.name}</p>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.devops} >
        <h4>DevOps</h4>
        <div className={styles.devopsIcons} >
          {DEVOPS.map((logo) => (
            <div key={logo.name} className={styles.logo}>
              <Image alt="" width={25} height={25} src={logo.src}></Image>
              <p>{logo.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;

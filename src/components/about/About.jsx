import styles from "./about.module.css";

const About = ({dictionary}) => {
  return (
    <div id="about" className={styles.container}>
      <h1>{dictionary.about.title}</h1>
      <article className={styles.article1}>{dictionary.about.p1}</article>
      <article className={styles.article2}>{dictionary.about.p2}</article>
      <article className={styles.article3}>{dictionary.about.p3}</article>
    </div>
  );
};

export default About;

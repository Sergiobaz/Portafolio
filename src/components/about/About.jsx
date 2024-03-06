import styles from "./about.module.css";

const About = () => {
  return (
    <div id="about" className={styles.container}>
      <article className={styles.article1}>
        {
          "I'm a dynamic full-stack developer driven by two major passions: software development and music."
        }
      </article>
      <article className={styles.article2} >
        {
          "Graduating from the Conservatorio Provincial de Tucumán with an outstanding average of 9.18/10 in guitar-specific studies not only showcases my dedication and discipline but also underscores my ability to pursue excellence in my pursuits."
        }
      </article>
      <article className={styles.article3} >
        {
          "As a full-stack developer, I bring this same level of commitment and precision to my work. With a strong focus on both back-end and front-end development, I thrive in creating organized, efficient, and high-functioning systems. My back-end skills ensure robust and reliable architecture, while my front-end expertise centers on optimizing user experience and functionality."
        }
      </article>
    </div>
  );
};

export default About;

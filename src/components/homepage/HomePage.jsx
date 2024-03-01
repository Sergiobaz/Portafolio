import styles from "./homepage.module.css";

const HomePage = () => {
  return (
    <div id="homepage" className={styles.container}>
      <h3 className={styles.welcome} >Welcome to My Portafolio!</h3>
      <h1 className={styles.name} >Sergio Bazan</h1>
      <h2 className={styles.stack}>Full Stack Developer</h2>
      <p className={styles.text}>
        {
          "I'm a dedicated Developer with focus on backend development."
        }
      </p>
      <p className={styles.text2} >{"I'm passionate about creating efficient and scalable solutions that solve real-world problems."}</p>
      <h3 className={styles.calltoaction} >{"Let's work together!"}</h3>
    </div>
  );
};
export default HomePage;

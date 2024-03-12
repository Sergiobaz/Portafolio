import Background from "../background/Background";
import styles from "./homepage.module.css";

const HomePage = ({ dictionary }) => {
  return (
    <div >
      <Background/>
      <div id="homepage" className={styles.container}>
        <h3 className={styles.welcome}>{dictionary.home.welcome}</h3>
        <h1 className={styles.name}>Sergio Bazan</h1>
        <h2 className={styles.stack}>{dictionary.home.stack}</h2>
        <p className={styles.text}>{dictionary.home.text1}</p>
        <p className={styles.text2}>{dictionary.home.text2}</p>
        <h3 className={styles.calltoaction}>{dictionary.home.calltoaction}</h3>
      </div>
    </div>
  );
};
export default HomePage;

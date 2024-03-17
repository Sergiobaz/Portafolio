import Link from "next/link";
import styles from "./desktop.module.css";

const Desktop = ({ item }) => {
  return (
    <div className={styles.links}>
      {item.map((link) => (
        <div key={link.title} className={styles.link}>
          <Link href={link.path}>{link.title} </Link>
        </div>
      ))}
    </div>
  );
};
export default Desktop;

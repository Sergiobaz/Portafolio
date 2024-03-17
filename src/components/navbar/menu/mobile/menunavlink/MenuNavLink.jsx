
import styles from "./menunavlink.module.css"
import Link from "next/link"


const MenuNavLink = ({setOpen, item }) => {
  return (
    <div className={styles.links} onClick={() => setOpen(false)} >
      <Link className={styles.link} href={item.path}>{item.title}</Link>
    </div>
  )
}
export default MenuNavLink
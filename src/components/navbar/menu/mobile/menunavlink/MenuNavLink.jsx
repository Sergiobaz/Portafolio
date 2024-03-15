
import styles from "./menunavlink.module.css"
import Link from "next/link"


const MenuNavLink = ({setOpen, item }) => {
  return (
    <div className={styles.link} onClick={() => setOpen(false)} >
      <Link href={item.path}>{item.title}</Link>
    </div>
  )
}
export default MenuNavLink
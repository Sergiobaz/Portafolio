

import Link from "next/link"


const MenuNavLink = ({setOpen, item }) => {
  return (
    <div onClick={() => setOpen(false)} >
      <Link href={item.path}>{item.title}</Link>
    </div>
  )
}
export default MenuNavLink
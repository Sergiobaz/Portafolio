import Link from "next/link"

const Desktop = ({item}) => {
  return (
    <div >
      {item.map((link) => (
        <Link href={link.path} key={link.title}>{link.title} </Link> 
    ))}</div>
  )
}
export default Desktop
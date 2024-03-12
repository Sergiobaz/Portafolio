import Image from 'next/image'

 
export default function Background() {
  return (
    <Image 
      alt="light"
      src={"/design/background-light.png"}
      placeholder="blur"
      quality={100}
      fill
      sizes="100vw"
      blurDataURL="data:..."
      style={{
        zIndex: "-1",
        objectFit: 'cover',
      }}
    />
  )
}
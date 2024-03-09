import Image from "next/image";
import styles from "./proyects.module.css";


const Proyects = ({dictionary}) => {
  const PROYECTS = [
    {
      title: "Pokedex",
      href: "http://pokedex2399.netlify.app",
      photo: "/Proyects/pokedex.png",
      description: dictionary.proyects.pokedex,
      technologies: ["/Skills/js.png", "/Skills/react.svg", "/Skills/axios.svg"],
    },
    {
      title: "Rick and Morty",
      href: "http://rickandmortyuniverses0.netlify.app",
      photo: "/Proyects/rickandmorty.png",
      description: dictionary.proyects.rickandmorty,
      technologies: ["/Skills/js.png", "/Skills/react.svg", "/Skills/axios.svg"],
    },
    {
      title: "Wheatherapp",
      href: "http://wheatherapp0.netlify.app",
      photo: "/Proyects/wheatherapp.png",
      description: dictionary.proyects.wheatherapp,
      technologies: ["/Skills/js.png", "/Skills/react.svg"],
    },
    {
      title: "Infogalaxy",
      href: "http://infogalaxy0.netlify.app",
      photo: "/Proyects/infogalaxy.png",
      description: dictionary.proyects.infogalaxy,
      technologies: ["/Skills/js.png", "/Skills/react.svg"],
    },
  ];
  return (
    <div id="proyects" className={styles.container}>
      <h2>{dictionary.proyects.title}</h2>
      {PROYECTS.map((proyect) => (
        <div key={proyect.photo} className={styles.proyect}>
          <h3>{proyect.title}</h3>
          <div className={styles.imagenContainer}>
            <a href={proyect.href} target="_blank">
              <Image
                className={styles.image}
                alt={proyect.description}
                fill={true}
                src={proyect.photo}
              ></Image>
            </a>
          </div>
          <p>{proyect.description}</p>
          <div>
            {proyect.technologies.map((technologie) => (
              <div key={technologie}>
                <Image alt="" width={25} height={25} src={technologie}></Image>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Proyects;

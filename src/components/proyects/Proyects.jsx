import Image from "next/image";
import styles from "./proyects.module.css";

const Proyects = ({ dictionary }) => {
  const PROYECTS = [
    {
      title: "Pokedex",
      href: "http://pokedex2399.netlify.app",
      photo: "/Proyects/pokedex.png",
      description: dictionary.proyects.pokedex,
      technologies: [
        "/Skills/js.png",
        "/Skills/html.png",
        "/Skills/css.png",
        "/Skills/react.svg",
        "/Skills/axios.svg",
        "/Skills/redux.svg",
        "/Skills/tailwind.png",
        "/Skills/vite.png",
      ],
    },
    {
      title: "Rick and Morty",
      href: "http://rickandmortyuniverses0.netlify.app",
      photo: "/Proyects/rickandmorty.png",
      description: dictionary.proyects.rickandmorty,
      technologies: [
        "/Skills/js.png",
        "/Skills/html.png",
        "/Skills/css.png",
        "/Skills/react.svg",
        "/Skills/axios.svg",
        "/Skills/redux.svg",
        "/Skills/tailwind.png",
        "/Skills/vite.png",
      ],
    },
    {
      title: "Wheatherapp",
      href: "http://wheatherapp0.netlify.app",
      photo: "/Proyects/wheatherapp.png",
      description: dictionary.proyects.wheatherapp,
      technologies: [
        "/Skills/js.png",
        "/Skills/html.png",
        "/Skills/css.png",
        "/Skills/react.svg",
        "/Skills/axios.svg",
        "/Skills/vite.png",
      ],
    },
    {
      title: "Infogalaxy",
      href: "http://infogalaxy0.netlify.app",
      photo: "/Proyects/infogalaxy.png",
      description: dictionary.proyects.infogalaxy,
      technologies: [
        "/Skills/js.png",
        "/Skills/html.png",
        "/Skills/css.png",
        "/Skills/react.svg",
        "/Skills/vite.png",
      ],
    },
  ];

  return (
    <div id="proyects" className={styles.container}>
      <h2>{dictionary.proyects.title}</h2>
      <div className={styles.card}>
        {PROYECTS.map((proyect) => (
          <div key={proyect.photo} className={styles.proyect}>
            <h3>{proyect.title}</h3>

            <a href={proyect.href} target="_blank">
              <div className={styles.imagenContainer}>
                <Image
                  className={styles.image}
                  alt={proyect.description}
                  fill={true}
                  src={proyect.photo}
                  sizes="(max-width: 768) 100vw, 700px"
                ></Image>
              </div>
            </a>
            <p className={styles.description}>{proyect.description}</p>
            <div className={styles.technologies}>
              {proyect.technologies.map((technologie) => (
                <div key={technologie}>
                  <Image
                    alt=""
                    width={30}
                    height={30}
                    src={technologie}
                  ></Image>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Proyects;

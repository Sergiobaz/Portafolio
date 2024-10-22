import A from "./proyects/A";
import B from "./proyects/B";

const Projects = ({ languaje }) => {
  const PROJECTS = [
    {
      id: 1,
      title: "Pokedex",
      href: "http://pokedex2399.netlify.app",
      gitHref: "https://github.com/Sergiobaz/pokedex-x",
      photo: "/Projects/pokedex.png",
      description: languaje.project.pokedex,
      technologies: [
        "/Projects/icons/js.svg",
        "/Projects/icons/html.svg",
        "/Projects/icons/css.svg",
        "/Projects/icons/react.svg",
        "/Projects/icons/axios.svg",
        "/Projects/icons/redux.svg",
        "/Projects/icons/tailwind.svg",
        "/Projects/icons/vite.svg",
      ],
    },
    {
      id: 2,
      title: "Rick&Morty",
      href: "http://rickandmortyuniverses0.netlify.app",
      gitHref: "https://github.com/Sergiobaz/RickAndMortyPage",
      photo: "/Projects/rickandmorty.png",
      description: languaje.project.rickandmorty,
      technologies: [
        "/Projects/icons/js.svg",
        "/Projects/icons/html.svg",
        "/Projects/icons/css.svg",
        "/Projects/icons/react.svg",
        "/Projects/icons/axios.svg",
        "/Projects/icons/redux.svg",
        "/Projects/icons/tailwind.svg",
        "/Projects/icons/vite.svg",
      ],
    },
    {
      id: 3,
      title: "Wheatherapp",
      href: "http://wheatherapp0.netlify.app",
      gitHref: "https://github.com/Sergiobaz/Weather-app",
      photo: "/Projects/wheatherapp.png",
      description: languaje.project.wheatherapp,
      technologies: [
        "/Projects/icons/js.svg",
        "/Projects/icons/html.svg",
        "/Projects/icons/css.svg",
        "/Projects/icons/react.svg",
        "/Projects/icons/axios.svg",
        "/Projects/icons/vite.svg",
      ],
    },
    {
      id: 4,
      title: "Infogalaxy",
      href: "http://infogalaxy0.netlify.app",
      gitHref: "https://github.com/Sergiobaz/RandomInfo",
      photo: "/Projects/infogalaxy.png",
      description: languaje.project.infogalaxy,
      technologies: [
        "/Projects/icons/js.svg",
        "/Projects/icons/html.svg",
        "/Projects/icons/css.svg",
        "/Projects/icons/react.svg",
        "/Projects/icons/vite.svg",
      ],
    },
  ];

  return (
    <div className="mx-10 lg:mx-0" id="projects" >
      <div className=" flex justify-center text-3xl font-semibold border-b mx-16 lg:mx-80 pb-1 pt-20 lg:pt-36 sm:text-6xl lg:mt-16">
        <div className="">PORTFOLIO</div>
      </div>
      {PROJECTS.map((project) => (
        <div className="lg:w-full flex justify-center" key={project.id}>
        {
          project.id % 2 ? <A project={project} languaje={languaje}/> : <B project={project} languaje={languaje}/>
        }
        </div>
        
      ))}
    </div>
  );
};
export default Projects;

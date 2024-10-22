import github from "../icons/github.png";
import linkedin from "../icons/linkedin.png";
import { LINKS } from "../data/links";

const Home = ({ languaje }) => {
  return (
    <>
      <div
        className=" pt-20  w-5/6 lg:grid lg:grid-cols-2 lg:w-full lg:pt-36"
        id="home"
      >
        <div className=" pl-20 sm:flex sm:flex-col sm:items-center lg:flex lg:items-start lg:ml-[10vw] ">
          <h1 className=" pl-4 lg:pl-0 text-3xl font-bold mb-2 sm:text-6xl lg:text-7xl lg:mt-12">
            Sergio Bazán
          </h1>
          {languaje.home.desarrollador ? (
            <div className="pl-4 lg:pl-0 text-2xl font-semibold sm:text-4xl lg:font-semibold lg:mt-12 lg:text-5xl ">
              {languaje.home.desarrollador} <br />
              {languaje.home.stack}
            </div>
          ) : (
            <div className="pl-4 lg:pl-0 text-2xl font-semibold sm:text-4xl lg:font-semibold lg:mt-12 lg:text-5xl ">
              {languaje.home.stack} <br />
              {languaje.home.developer}
            </div>
          )}

          <div className="pl-4 lg:pl-0 flex space-x-4 items-center my-5 lg:mt-12 ">
            <a href={LINKS.gitHub} target="_blank">
              <img
                className=" cursor-pointer w-8 h-8 aspect-square"
                src={github}
              />
            </a>
            <a href={LINKS.linkedIn} target="_blank">
              <img className=" cursor-pointer w-10 h-10" src={linkedin} />
            </a>
          </div>
        </div>
        <div className="ml-14 pl-5 w-9/12 space-y-4 lg:w-3/4 lg:mt-16 lg:pl-10">
          <div className="font-extralight sm:text-2xl mb-10 font-lato">
            {languaje.home.text1}
          </div>
          <div className="font-extralight sm:text-2xl font-lato">
            {languaje.home.text2}
          </div>
          <div className="cursor-pointer flex flex-col justify-start items-center space-y-2 lg:space-y-0 sm:text-xl lg:flex-row lg:text-base lg:space-x-6  ">
            <a
              className="bg-[#222222] p-3 px-6 my-3 rounded-full sm:p-4 sm:px-8 lg:py-3 "
              href={languaje.home.cvPath}
              download={languaje.home.cvName}
            >
              {languaje.home.calltoaction1}
            </a>
            <a
              href="#projects"
              className="cursor-pointer bg-[#222222] p-2 px-8 my-3 rounded-full sm:p-3 sm:px-10 "
            >
              {languaje.home.calltoaction2}
            </a>
          </div>
        </div>
      </div>
      
    </>
  );
};
export default Home;

import github from "../icons/github.png";
import linkedin from "../icons/linkedin.png";

const Home = ({ languaje }) => {
  return (
    <>
      <div className=" pt-28 ml-10 w-3/4 lg:grid lg:grid-cols-2 lg:w-full lg:pt-36">
        <div className=" sm:flex sm:flex-col sm:items-center lg:flex lg:items-start lg:ml-[10vw] ">
          <h1 className=" text-3xl font-bold mb-2 sm:text-6xl lg:text-7xl lg:mt-12">Sergio Bazán</h1>
          <div className="text-2xl font-semibold sm:text-4xl lg:font-semibold lg:mt-12 lg:text-5xl ">
            {languaje.home.stack}
          </div>
          <div className=" flex space-x-4 items-center my-5 lg:mt-12 ">
            <img className="w-8 h-8 aspect-square" src={github} />
            <img className="w-10 h-10" src={linkedin} />
          </div>
        </div>
        <div className=" space-y-4 lg:w-3/4 lg:mt-16 lg:pl-10">
          <div className="font-extralight sm:text-2xl mb-10">
            {languaje.home.text1}
          </div>
          <div className="font-extralight sm:text-2xl">
            {languaje.home.text2}
          </div>
          <div className="flex flex-col justify-start items-center space-y-2 lg:space-y-0 sm:text-xl lg:flex-row lg:text-base lg:space-x-6  ">
            <button className="bg-[#222222] p-3 px-6 my-3 rounded-full sm:p-4 sm:px-8 lg:py-3  ">
              {languaje.home.calltoaction1}
            </button>
            <button className="bg-[#222222] p-2 px-8 my-3 rounded-full sm:p-3 sm:px-10 ">
              {languaje.home.calltoaction2}
            </button>
          </div>
        </div>
      </div>
      <div className=" flex justify-center text-3xl font-semibold border-b mx-20 lg:mx-80 pb-1 pt-14 sm:text-6xl lg:mt-16">
        <div className="">
          PORTFOLIO
        </div>
        <div className=""></div>
      </div>
    </>
  );
};
export default Home;

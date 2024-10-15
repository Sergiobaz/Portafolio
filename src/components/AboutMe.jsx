const AboutMe = ({ languaje }) => {
  return (
    <div className=" mt-20 mx-10 ">
      <div className="">
      <div className="border relative top-6 right-10 w-8 lg:w-52"></div>
      <div className="bg-white h-2 w-2 rounded-full relative top-5 right-2 lg:left-40"></div>
        <h1 className=" text-3xl font-semibold relative left-4 lg:left-52 lg:text-5xl">
          {languaje.about.title}
        </h1>
        <div className="bg-white h-2 w-2 rounded-full relative top-9 left-3 lg:hidden" ></div>
        <div className=" mt-8 text-sm ml-4 border-l pl-8 py-4 lg:w-2/4 lg:border-none lg:ml-80" >
          <article className="mb-6 lg:text-lg">{languaje.about.p1}</article>
          <article className="mb-6 lg:text-lg">{languaje.about.p2}</article>
          <article className="lg:text-lg">{languaje.about.p3}</article>
        </div>
        <div className="bg-white h-2 w-2 rounded-full relative left-3 lg:hidden"></div>
      </div>
    </div>
  );
};
export default AboutMe;

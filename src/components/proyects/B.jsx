const B = ({ project, languaje }) => {
  return (
    <div className="mt-24 lg:grid lg:grid-cols-2 lg:w-4/6" >

    <div className=" lg:flex flex-col justify-center items-center mt-6 hidden lg:mr-32">
      <div className=" h-52 sm:h-[300px] overflow-hidden rounded-[40px] shadow-2xl  shadow-gray-500  hover:shadow-gray-400 hover:transition-shadow">
        <img
          className="w-60 h-full object-cover sm:w-[320px]  "
          src={project.photo}
        />
      </div>
      <h3 className="text-2xl font-semibold mt-6">{project.title}</h3>
    </div>

    <div key={project.title} className="">
      <div className="">
        <div>
          <h3 className=" text-2xl font-semibold mb-4 lg:mb-6 lg:text-3xl">
            {languaje.words.project} {project.id}
          </h3>
          <p className="">{project.description}</p>
        </div>
        <div>
          <h4 className="text-lg font-semibold mt-6 mb-2 lg:text-2xl lg:mt-20">
            {languaje.words.buildWith}
          </h4>
          <div className=" flex flex-wrap items-center justify-evenly ">
            {project.technologies.map((technologie) => (
              <img
                className="h-[5vw] lg:h-[5vh] my-2 "
                src={technologie}
                key={technologie}
              />
            ))}
          </div>
        </div>
      </div>
    </div>


    <div className=" flex flex-col justify-center items-center mt-6 lg:hidden">
      <div className=" h-52 sm:h-[300px] overflow-hidden rounded-[40px] shadow-2xl  shadow-gray-500  hover:shadow-gray-400 hover:transition-shadow">
        <img
          className="w-60 h-full object-cover sm:w-[320px]  "
          src={project.photo}
        />
      </div>
      <h3 className="text-2xl font-semibold mt-6">{project.title}</h3>
    </div>
  </div>
  );
};
export default B;

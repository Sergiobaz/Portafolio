const Skills = ({ languaje }) => {
  return (
    <div className=" flex flex-col justify-center items-center mt-24">
      <div className="text-3xl font-semibold border-b px-28 pb-2">Skills</div>
      <div className="mt-8 text-2xl text-semibold">{languaje.skills.p}</div>
      <div className=" flex bg-[#222222] p-3 px-6 rounded-2xl my-3 lg:space-x-10 lg:p-6 lg:px-10">
        <img className="h-12 w-12" src="/Skills/js.svg" alt="" />
        <img className="h-12 w-12" src="/Skills/ts.svg" alt="" />
      </div>
      <div className="mb-4">
        <div className="bg-white h-1.5 w-1.5 rounded-full"></div>
        <div className="relative left-0.5 h-24 border border-white w-0"></div>
        <div className="bg-white h-1.5 w-1.5 rounded-full"></div>
      </div>
      <div className="text-2xl text-semibold">Front-end</div>
      <div className="lg:grid">
        <div className=" flex flex-row justify-evenly flex-wrap space-x-2 mx-14 my-6 p-4  lg:space-x-4 lg:justify-self-center lg:w-[40%] bg-[#222222] rounded-2xl lg:p-10">
          <img className="h-12 w-12 lg:h-16 lg:w-16 my-2" src="/Skills/html.svg" alt="" />
          <img className="h-12 w-12 lg:h-16 lg:w-16 my-2" src="/Skills/css.svg" alt="" />
          <img className="h-12 w-12 lg:h-16 lg:w-16 my-2" src="/Skills/tailwind.svg" alt="" />
          <img className="h-12 w-12 lg:h-16 lg:w-16 my-2" src="/Skills/react.svg" alt="" />
          <img className="h-12 w-12 lg:h-16 lg:w-16 my-2" src="/Skills/next.svg" alt="" />
          <img className="h-12 w-12 lg:h-16 lg:w-16 my-2" src="/Skills/vite.svg" alt="" />
          <img className="h-12 w-24 lg:h-16 lg:w-32 my-2" src="/Skills/axios.svg" alt="" />
          <img className="h-12 w-12 lg:h-16 lg:w-16 my-2" src="/Skills/redux.svg" alt="" />
        </div>
      </div>
      <div className="mb-4">
        <div className="bg-white h-1.5 w-1.5 rounded-full"></div>
        <div className="relative left-0.5 h-24 border border-white w-0"></div>
        <div className="bg-white h-1.5 w-1.5 rounded-full"></div>
      </div>
      <div className="text-2xl text-semibold mb-4">Back-end</div>
      <div className="bg-[#222222] rounded-2xl flex flex-row justify-evenly flex-wrap p-4 space-x-2 lg:space-x-8 lg:p-6 lg:px-20  mx-14 my-6">
        <img className=" h-12 w-12 lg:h-16 lg:w-16 " src="/Skills/node.svg" alt="" />
        <img className=" h-12 w-12 lg:h-16 lg:w-16 " src="/Skills/express.svg" alt="" />
        <img className=" h-12 w-12 lg:h-16 lg:w-16 " src="/Skills/posgreql.svg" alt="" />
        <img className=" h-12 w-12 lg:h-16 lg:w-16 " src="/Skills/zod.svg" alt="" />
        <img className=" h-12 w-12 lg:h-16 lg:w-16 " src="/Skills/sequelize.svg" alt="" />
      </div>
    </div>
  );
};
export default Skills;

const Footer = ({ languaje }) => {
  return (
    <div className=" w-full border-t grid ">
      <div className=" justify-self-center flex space-x-6 my-6">
        <img className=" h-8 w-8" src="/Footer/vector0.svg" alt="" />
        <img className=" h-8 w-8" src="/Footer/Vector.svg" alt="" />
        <img className=" h-8 w-8" src="/Footer/linkedin.svg" alt="" />
      </div>
      <div className=" justify-self-center mb-6">{languaje.home.calltoaction1}</div>
    </div>
  );
};
export default Footer;

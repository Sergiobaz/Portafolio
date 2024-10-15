import { LINKS } from "../data/links";

const Footer = ({ languaje }) => {
  return (
    <div className=" w-full border-t grid ">
      <div className=" justify-self-center flex space-x-6 my-6">
        <a href={LINKS.eMail} target="_blank">
          <img className=" h-8 w-8" src="/Footer/mail.svg" alt="" />
        </a>
        <a href={LINKS.gitHub} target="_blank">
          <img className=" h-8 w-8" src="/Footer/github.svg" alt="" />
        </a>
        <a href={LINKS.linkedIn} target="_blank">
          <img className=" h-8 w-8" src="/Footer/linkedin.svg" alt="" />
        </a>
      </div>
      <div className=" justify-self-center mb-6">
        {languaje.home.calltoaction1}
      </div>
    </div>
  );
};
export default Footer;

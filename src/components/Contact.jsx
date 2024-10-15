import { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = ({ languaje }) => {
  const form = useRef();

  const YOUR_SERVICE_ID = "service_talagda";
  const YOUR_TEMPLATE_ID = "template_b4h4qcl";
  const YOUR_PUBLIC_KEY = "3tFsMS_tyKDieLlJg";

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(YOUR_SERVICE_ID, YOUR_TEMPLATE_ID, form.current, {
        publicKey: YOUR_PUBLIC_KEY,
      })
      .then(
        () => {
          console.log("SUCCESS!");
          form.current.reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

 
    const popAlert = () => {
  
      window.alert("Message send!")
    }
 

  return (
    <div className=" flex flex-col justify-center items-center pt-14 lg:pt-24 lg:w-full lg:mb-24 mb-10 " id="contact">
      <div className=" text-3xl font-semibold mt-4 mb-4 lg:text-6xl lg:mb-10 lg:relative lg:right-1/4  ">
        {languaje.contact.title}
      </div>
      <form
        id="form"
        ref={form}
        onSubmit={sendEmail}
        className=" flex flex-col lg:w-2/5 "
      >
        <label className="mb-2">{languaje.contact.name}</label>
        <input
          className=" bg-[#222222] rounded-full mb-3 px-2 mx-4 lg:mx-0 lg:py-1.5 "
          type="text"
          name="user_name"
        />
        <label className="mb-2">Email</label>
        <input
          className=" bg-[#222222] rounded-full  mb-3 px-2 mx-4 lg:mx-0 lg:py-1.5 "
          type="mail"
          name="user_mail"
        />
        <label className="mb-2">{languaje.contact.message}</label>
        <textarea className="bg-[#222222] rounded-2xl lg:h-52 py-2 px-2 " name="message" />
        <input
          onClick={popAlert}
          className="bg-[#222222] mt-4 rounded-full mx-10 py-1 mb-10 lg:mx-40 lg:py-2 cursor-pointer "
          type="submit"
          value={languaje.contact.submit}
        />
      </form>
    </div>
  );
};
export default Contact;

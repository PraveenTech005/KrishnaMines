import Alpine from "../assets/img/alpine.png";
import Indmar from "../assets/img/indmar.png";
import Super from "../assets/img/super.png";
import Addlogo from "../assets/img/addlogo.png";
import Logo from "../assets/img/logo.png";
import { FaLocationDot, FaPhone } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";

const Contact = () => {
  return (
    <div id="contact" className="w-full h-auto">
      <div className="m-5 flex">
        <h1 className="text-white text-2xl font-bold uppercase montbold bg-blurb text-center p-3">
          Contact
        </h1>
      </div>
      <div className="flex flex-col justify-center items-center p-3 space-y-10">
        <div className="flex flex-row w-8/12 justify-center items-center space-x-5">
          <img
            src={Alpine}
            alt="Alpine"
            className="w-4/12 lg:w-2/12 rounded-3xl border-2 border-black"
          />
          <img
            src={Indmar}
            alt="Indmar"
            className="w-4/12 lg:w-2/12 rounded-3xl border-2 border-black"
          />
          <img
            src={Super}
            alt="Super"
            className="w-4/12 lg:w-2/12 rounded-3xl border-2 border-black"
          />
          <img
            src={Addlogo}
            alt="Krishna Mines"
            className="w-4/12 lg:w-2/12 rounded-3xl border-2 border-black"
          />
        </div>
        <img
          src={Logo}
          alt="Logo"
          className="w-6/12 lg:w-3/12 rounded-3xl border-2 border-black"
        />
        <div className="bg-blurb text-white w-10/12 flex flex-col justify-center items-center p-3 space-y-5 hover-w">
          <h1 className="font-bold montbold text-xl border-b-2 w-full p-2 text-center border-white">
            Corporate office
          </h1>
          <div className="flex flex-col md:flex-row justify-evenly items-center w-full space-y-5 lg:space-y-0 text-sm lg:text-md">
            <div className="flex flex-row justify-evenly items-center w-10/12 lg:w-3/12 font-bold">
              <FaLocationDot className="text-lg lg:text-2xl" />
              <div className="flex flex-col justify-center items-center space-y-2">
                <h1>Krishna Mines Group</h1>
                <h1>#23 Sripuram,</h1>
                <h1>Tirunelveli, Tamil Nadu,</h1>
                <h1>India - 627001</h1>
              </div>
            </div>
            <div className="flex flex-row justify-evenly items-center  w-10/12 lg:w-3/12 font-bold">
              <FaPhone className="text-lg lg:text-2xl" />
              <div className="space-y-3">
                <h1>+91-462-2333877</h1>
                <h1>+91-462-2333200</h1>
                <h1>+91-462-2339248</h1>
              </div>
            </div>
            <div className="flex flex-row justify-evenly items-center  w-10/12 lg:w-3/12 font-bold">
              <IoMdMail className="text-lg lg:text-2xl" />
              info@krishnamines.com
            </div>
          </div>
        </div>
      </div>
      <div className="bg-neutral-800 text-sm py-5 md:py-3 ubuntu text-white text-center">
        &copy; 2024 Krishna Mines Group. All Rights Reserved.
      </div>
    </div>
  );
};

export default Contact;

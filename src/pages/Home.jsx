// import React from "react";
import Logo from "../assets/img/logo.png";
import homeimg from "../assets/img/addlogo.png";
import Brochure from "../assets/pdf/Brochure.pdf";
import { RiFileDownloadFill } from "react-icons/ri";

const Home = () => {
  const links = [
    "Home",
    "About",
    "Product",
    "We Care",
    "Recognition",
    "Contact",
  ];
  return (
    <div
      id="home"
      className="flex flex-col w-full min-h-screen border-b-2 border-black"
    >
      <div className="w-full bg-black text-white flex flex-row justify-between items-center p-3 nav">
        <div className="w-4/12 cursor-pointer">
          <a href="#home" className="flex flex-row space-x-5 items-center ">
            <img src={Logo} alt="Logo" className="w-1/6 rounded-xl" />
            <h1 className="uppercase text-4xl fontempire">
              Krishna Mines <span className="text-neutral-400">Group</span>
            </h1>
          </a>
        </div>
        <div className="fixed right-5 z-10 bg-blurb p-3 flex flex-row space-x-5 font-bold montbold text-sm items-center">
          <div className="space-x-2">
            {links.map((item, index) => (
              <a
                key={index}
                className="p-1 hover:underline hover:underline-offset-8 hover:text-red-600"
                href={`#${item === "We Care" ? "care" : item.toLowerCase()}`}
              >
                {item}
              </a>
            ))}
          </div>
          <a
            href={Brochure}
            download
            className="bg-blue p-1 font-bold rounded-md flex justify-center items-center"
          >
            <RiFileDownloadFill className="m-2" /> Brochure
          </a>
        </div>
      </div>
      <div className="flex w-full h-full justify-evenly items-center">
        <div className="flex flex-row w-full p-10 space-x-20 justify-evenly items-center">
          <p className="w-5/12 p-3 indent-10">
            We are a leading mining company in South India established in 1958
            about 60+ years of dedicated experience in mining and processing of
            Limestone and its auxiliary products. Established primarily as a
            Mining Specialized organization by the company’s founders, our
            purpose is to create an economically responsible mining culture
            through sustained, long term, efficient and environmentally sound
            mining practices.
            <br />
            <br /> Our every action is directed towards producing and processing
            the earth’s minerals through the most economic and efficient
            approach so as to provide the best materials that lead to fulfilling
            consumer’s needs, improving living standards whilst ensuring an
            ecologically healthy environment.
          </p>
          <p className="w-5/12 p-3 indent-10">
            We achieve this by relying on our staff imbued with the Company’s
            time tested culture of mining with integrity and accountability. To
            deliver superior products to our customers, we concentrate on
            development of first class deposits into long term and efficient
            operations capable of sustained competitive advantage.
            <br />
            <br /> We at <span>Krishna Mines Group</span> believe that a company
            must constantly strive to improve its core tenets, practices and
            products to ensure that we are the best at what we do - This
            organizational thinking has propelled us into producing quality
            products and services for millions of happy customers for over 60
            years.
          </p>
          <img
            src={homeimg}
            alt="logo with slogan"
            className="w-72 h-72 rounded-3xl"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;

// import React from "react";
import homeimg from "../assets/img/addlogo.png";
import Nav from "./Nav";
import Logo from "../assets/img/logo.png";

const Home = () => {
  return (
    <div
      id="home"
      className="flex flex-col w-full lg:min-h-screen border-b-2 border-black"
    >
      <div className="w-full bg-black text-white flex flex-row justify-between items-center p-3 nav">
        <div className="w-10/12 md:w-8/12 lg:w-5/12 cursor-pointer">
          <a href="#home" className="flex flex-row space-x-5 items-center ">
            <img src={Logo} alt="Logo" className="w-1/6 rounded-xl" />
            <h1 className="uppercase text-lg md:text-2xl xl:text-4xl fontempire">
              Krishna Mines <span className="text-neutral-400">Group</span>
            </h1>
          </a>
        </div>
        <Nav />
      </div>
      <div className=" w-full h-full justify-evenly items-center">
        <div className="flex flex-col lg:flex-row w-full p-10 space-y-10 lg:space-y-0 lg:space-x-10 justify-evenly items-center">
          <p className="w-full lg:w-6/12 p-3 indent-10">
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
          <img
            src={homeimg}
            alt="logo with slogan"
            className="w-72 h-72 rounded-3xl border-4 border-black lg:hidden"
          />
          <p className="w-full lg:w-6/12 p-3 indent-10">
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
            className="w-72 h-72 rounded-3xl border-4 border-black hidden lg:flex"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;

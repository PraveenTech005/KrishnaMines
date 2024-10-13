import React, { useState } from "react";
import Brochure from "../assets/pdf/Brochure.pdf";
import { RiFileDownloadFill } from "react-icons/ri";

const Nav = () => {
  const [change, setChange] = useState(false);
  const links = [
    "Home",
    "About",
    "Product",
    "We Care",
    "Recognition",
    "Contact",
  ];

  const handleHam = (e) => {
    const menu = document.querySelector(".menu");
    menu.classList.toggle("change");
    if (menu.classList.contains("change")) {
      setChange(true);
    } else {
      setChange(false);
    }
  };

  return (
    <>
      <div className="fixed right-5 z-10 bg-blurb p-3 lg:flex flex-row space-x-5 font-bold montbold text-sm items-center hover:bg-black hidden">
        <div className="space-x-2">
          {links.map((item, index) => (
            <a
              key={index}
              className="p-1 hover:underline hover:underline-offset-8 hover:text-red-600 h-full"
              href={`#${item === "We Care" ? "care" : item.toLowerCase()}`}
            >
              {item}
            </a>
          ))}
        </div>
        <a
          href={Brochure}
          download
          className="bg-blue p-1 px-2 font-bold rounded-md flex justify-center items-center"
        >
          <RiFileDownloadFill className="m-2" /> Brochure
        </a>
      </div>
      <div className="fixed flex right-0 lg:hidden justify-evenly items-center md:space-x-3 z-20  m-3 p-3 bg-blurb">
        <a
          href={Brochure}
          download
          className="bg-blue p-1 px-2 hidden font-bold rounded-md md:flex justify-center items-center"
        >
          <RiFileDownloadFill className="m-2" /> Brochure
        </a>
        <div
          className="menu flex justify-evenly items-center flex-col"
          onClick={(e) => handleHam(e)}
        >
          <div className="bar bar1"></div>
          <div className="bar bar2"></div>
          <div className="bar bar3"></div>
        </div>
      </div>
      {change && (
        <div
          className={`fixed z-10 top-0 overlay ${
            change ? "right-0" : "-right-full"
          } w-full h-full bg-black flex flex-col justify-center items-center`}
        >
          <div className="flex flex-col w-full text-center space-y-5">
            {links.map((item, index) => (
              <a
                key={index}
                className="p-3 text-lg montbold"
                href={`#${item === "We Care" ? "care" : item.toLowerCase()}`}
                onClick={() => handleHam()}
              >
                {item}
              </a>
            ))}
          </div>
          <a
            href={Brochure}
            download
            className="absolute bottom-10 bg-blue p-1 w-10/12 font-bold rounded-md flex md:hidden justify-center items-center"
          >
            <RiFileDownloadFill className="m-2" /> Brochure
          </a>
        </div>
      )}
    </>
  );
};

export default Nav;

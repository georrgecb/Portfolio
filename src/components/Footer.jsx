import React from "react";
import rodeo from "../images/rodeo-footer.svg";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="bg-orange">
      <img src={rodeo} className="h-48 ml-auto bg-orange" alt="rodeo" />
      <div className="h-52 bg-red-dark px-16 -mt-12 flex justify-center lg:justify-between items-center">
        <div className="flex">
          <div className="flex border-r-2 p-2 border-red items-center gap-1">
            <AiFillGithub className="text-2xl text-orange" />
            <p className="text-lg text-orange font-semibold ">GitHub</p>
          </div>
          <div className="flex items-center border-r-2 p-2 border-red gap-1">
            <AiFillLinkedin className="text-2xl text-orange" />
            <p className="text-lg text-orange font-semibold ">LinkedIn</p>
          </div>
          <div className="flex items-center p-2 gap-1">
            <AiFillInstagram className="text-2xl text-orange" />
            <p className="text-lg text-orange font-semibold ">Instagram</p>
          </div>
        </div>
        <div className="hidden lg:block">
          <p className="text-orange text-2xl font-bold rounded-full border-4 flex justify-center items-center border-orange h-28 w-28">
            2021
          </p>
        </div>
        <div className="hidden lg:flex">
          <div className="flex border-r-2 p-2 border-red items-center gap-2">
            <p className="text-lg text-orange font-semibold ">
              Personal Portfolio
            </p>
          </div>

          <div className="flex items-center p-2 gap-2">
            <p className="text-lg text-orange font-semibold ">
              No Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import profile from "../assets/profile.jpg";

const Main = () => {
  return (
    <div id="main" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <div className="flex flex-col sm:flex-row items-center">
        <div className="flex-1 p-5 pr-0 m-4 order-2 sm:order-1">
          <h1 className="sm:text-5xl text-4xl font-bold text-indigo-800">
            Hi I'm Marcus Leung
          </h1>
          <div className="flex justify-between pt-7 max-w-[100px]">
            <a
              href="https://www.linkedin.com/in/marcus-leung-582006252/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="cursor-pointer" size={32} />
            </a>
            <a
              href="https://github.com/marcus-leung"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="cursor-pointer" size={32} />
            </a>
          </div>
        </div>
        <div className="flex-1 order-1 sm:order-2">
          <img
            src={profile}
            alt="Profile Picture"
            className="rounded-3xl shadow-lg shadow-slate-600 border border-black"
          />
        </div>
      </div>
    </div>
  );
};

export default Main;

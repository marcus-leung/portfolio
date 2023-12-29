import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import profile from "../assets/profile.jpg";

const Main = () => {
  return (
    <div id="main" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <div className="flex flex-col sm:flex-row items-center">
        <div className="flex-1 p-5 pr-0 m-4 order-2 sm:order-1 text-center">
          <h1 className="sm:text-5xl text-4xl font-bold text-indigo-800 items-center">
            Hi I'm Marcus Leung
          </h1>
          <div className="flex justify-between pt-7 w-full">
            <a
              href="https://www.linkedin.com/in/marcus-leung-582006252/"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-32"
            >
              <FaLinkedin className="cursor-pointer" size={32} />
            </a>
            <a
              href="https://github.com/marcus-leung"
              target="_blank"
              rel="noopener noreferrer"
              className="mr-32"
            >
              <FaGithub className="cursor-pointer" size={32} />
            </a>
          </div>
          <h2 className="mt-5 mr-2 pr-5 text-xl text-indigo-800 font-medium">Seeking a summer tech-related internship as a Technology and Information Management student at UC Santa Cruz, on track to graduate in June 2025</h2>
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

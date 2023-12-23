import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineHome, AiOutlineMail } from "react-icons/ai";
import { MdOutlineWorkOutline } from "react-icons/md";
import { LuBookMinus } from "react-icons/lu";
import { FaRegFolderOpen } from "react-icons/fa";
import { SlGraduation } from "react-icons/sl";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div>
      <AiOutlineMenu
        onClick={handleNav}
        className="absolute top-4 right-4 z-[99] md:hidden"
      />
      {nav ? (
        <div className="fixed w-full h-screen bg-indigo-100/90 flex flex-col justify-center items-center z-20">
          <a
            onClick={handleNav}
            href="#main"
            className="w-[75%] flex justify-center items-center rounded-full shadow-md bg-blue-100 shadow-indigo-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <AiOutlineHome size={20} />
            <span className="pl-4">Home</span>
          </a>
          <a
            onClick={handleNav}
            href="#work"
            className="w-[75%] flex justify-center items-center rounded-full shadow-md bg-blue-100 shadow-indigo-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <MdOutlineWorkOutline size={20} />
            <span className="pl-4">Work</span>
          </a>
          <a
            onClick={handleNav}
            href="#projects"
            className="w-[75%] flex justify-center items-center rounded-full shadow-md bg-blue-100 shadow-indigo-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <FaRegFolderOpen size={20} />
            <span className="pl-4">Projects</span>
          </a>
          <a
            onClick={handleNav}
            href="#skills"
            className="w-[75%] flex justify-center items-center rounded-full shadow-md bg-blue-100 shadow-indigo-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <LuBookMinus size={20} />
            <span className="pl-4">Skills</span>
          </a>
          <a
            onClick={handleNav}
            href="#education"
            className="w-[75%] flex justify-center items-center rounded-full shadow-md bg-blue-100 shadow-indigo-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <SlGraduation size={20} />
            <span className="pl-4">Education</span>
          </a>
          <a
            onClick={handleNav}
            href="#contact"
            className="w-[75%] flex justify-center items-center rounded-full shadow-md bg-blue-100 shadow-indigo-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <AiOutlineMail size={20} />
            <span className="pl-4">Contact</span>
          </a>
        </div>
      ) : (
        ""
      )}
      <div className="md:block hidden fixed top-[25%] z-10">
        <div className="flex flex-col">
          <a
            href="#main"
            title="Home"
            className="rounded-full shadow-md bg-blue-100 shadow-indigo-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300"
          >
            <AiOutlineHome size={20} />
          </a>
          <a
            href="#work"
            title="Work"
            className="rounded-full shadow-md bg-blue-100 shadow-indigo-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300"
          >
            <MdOutlineWorkOutline size={20} />
          </a>
          <a
            href="#projects"
            title="Projects"
            className="rounded-full shadow-md bg-blue-100 shadow-indigo-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300"
          >
            <FaRegFolderOpen size={20} />
          </a>
          <a
            href="#skills"
            title="Skills"
            className="rounded-full shadow-md bg-blue-100 shadow-indigo-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300"
          >
            <LuBookMinus size={20} />
          </a>
          <a
            href="#education"
            title="Education"
            className="rounded-full shadow-md bg-blue-100 shadow-indigo-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300"
          >
            <SlGraduation size={20} />
          </a>
          <a
            href="#contact"
            title="Contact"
            className="rounded-full shadow-md bg-blue-100 shadow-indigo-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300"
          >
            <AiOutlineMail size={20} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

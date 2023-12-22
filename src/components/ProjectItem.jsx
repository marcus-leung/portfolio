import React from "react";
import { FaGithub } from "react-icons/fa";

const ProjectItem = ({ img, title, langs, tools, link, site }) => {
  const hasSite = site && site !== "";

  return (
    <div>
      <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-t from-gray-300 to-indigo-800">
        <img src={img} alt="/" className="rounded-xl group-hover:opacity-10" />
        <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
          <h3 className="text-2xl font-bold text-white text-center">{title}</h3>
          <span className="flex items-center justify-center pt-5 rounded-lg">
            <a href={link} target="_blank" rel="noopener noreferrer">
              <FaGithub className="cursor-pointer" size={32} />
            </a>
          </span>
        </div>
      </div>
      <div className="mt-7 p-1 grid justify-center items-center">
        <h3 className="flex text-xl font-semibold justify-center items-center">
          {title}
        </h3>
        {hasSite ? (
          <a
            href={"https://" + site + "/"}
            className="flex justify-center items-center text-blue-600 dark:text-blue-500 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            {site}
          </a>
        ) : (
          ""
        )}
        <h2 className="flex justify-center items-center">{langs}</h2>
        <h2 className="flex justify-center items-center">{tools}</h2>
      </div>
    </div>
  );
};

export default ProjectItem;

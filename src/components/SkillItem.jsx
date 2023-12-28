import React from "react";

const SkillItem = ({ link, text }) => {
  return (
    <div className="aspect-square md:shadow shadow-gray-300 flex flex-col justify-center items-center m-5 hover:scale-110 transition duration-500">
      <img src={link} className="sm:w-24 sm:h-24"/>
      <p className="font-mono text-lg pt-2 hidden md:block">{text}</p>
    </div>
  );
};

export default SkillItem;

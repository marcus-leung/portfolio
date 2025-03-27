import React from "react";

const ActivitiesItem = ({ date, company, role, duration, details }) => {
  return (
    <ol className="flex flex-col md:flex-row relative border-l border-stone-200">
      <li className="mb-10 ml-4">
        <div className="absolute w-3 h-3 bg-stone-200 rounded-full mt-1.5 -left-1.5 border-white" />
        <p className="flex flex-wrap gap-4 flex-row items-center justify-start text-xs md:text-sm">
          <span className="inline-block px-2 py-1 font-semibold text-white bg-indigo-800 rounded-md">
            {date}
          </span>
          <span className="text-lg text-indigo-800">
            <span className="font-semibold">{company}</span>
            <span>&nbsp;-&nbsp;</span>
            {role}
          </span>
          <span className="my-1 text-sm font-normal leading-none text-stone-400">
            {duration}
          </span>
        </p>
        <ul>
          {details.map((desc, index) => (
            <li key={index}>
              <span>{desc}</span>
            </li>
          ))}
        </ul>
      </li>
    </ol>
  );
};

export default ActivitiesItem;

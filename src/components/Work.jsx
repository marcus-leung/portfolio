import React from "react";
import WorkItem from "./WorkItem";
import jobs from "../data/jobs";

const Work = () => {
  return (
    <div id="work" className="max-w-[1040px] m-auto md:pl-20 p-4 md:py-16 hide">
      <h1 className="text-4xl font-bold text-center text-indigo-800 pb-5">
        Work Experience
      </h1>
      {jobs.map((item, id) => (
        <WorkItem
          key={id}
          date={item.date}
          company={item.company}
          role={item.role}
          duration={item.duration}
          details={item.details}
        />
      ))}
    </div>
  );
};

export default Work;

import React from "react";
import WorkItem from "./WorkItem";
import jobs from "../data/jobs";

const Work = () => {
  return (
    <section id="work" className="max-w-[1040px] m-auto p-4 md:py-16 hide">
      <h1 className="text-4xl font-bold text-center text-indigo-800 pb-5">
        Work Experience
      </h1>
      {jobs.map((item, index) => (
        <WorkItem
          key={index}
          date={item.date}
          company={item.company}
          role={item.role}
          duration={item.duration}
          details={item.details}
        />
      ))}
    </section>
  );
};

export default Work;

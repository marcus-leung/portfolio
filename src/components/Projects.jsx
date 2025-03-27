import React from "react";
import ProjectItem from "./ProjectItem";
import SFIG from "../assets/sfig.png";
import Stock from "../assets/stock.png";
import CruzHacks24 from "../assets/cruzhacks24.png";
import data from "../data/projectdesc";

const Projects = () => {

  return (
    <section id="projects" className="max-w-[950px] m-auto p-4 py-10">
      <h1 className="text-4xl font-bold text-center text-indigo-800 mb-5 pb-5">
        Projects
      </h1>
      <div className="grid grid-cols-1 gap-12">
        <ProjectItem
          img={SFIG}
          title="Slug Fund Investment Group Website"
          link="https://github.com/marcus-leung/Slug-Fund-Investment-Group-Website"
          site="slugfundinvestmentgroup.com"
          descriptions={data[0]}
        />
        <ProjectItem
          img={Stock}
          title="Stock Market Analysis and Visualization Application"
          link="https://github.com/marcus-leung/stockmarketanalysistool"
          descriptions={data[1]}
        />
        <ProjectItem
          img={CruzHacks24}
          title="CruzHacks 2024: SlugHug"
          link="https://github.com/marcus-leung/SlugHug"
          site="slughug.us"
          descriptions={data[2]}
          />
      </div>
    </section>
  );
};

export default Projects;

import React from "react";
import ProjectItem from "./ProjectItem";
import SFIG from "../assets/sfig.png";
import Stock from "../assets/stock.png";
import CruzHacks from "../assets/cruzhacks.jpg";
import Portfolio from "../assets/port.png";
import data from "../data/projectdesc";

const Projects = () => {

  return (
    <div id="projects" className="max-w-[950px] m-auto md:pl-20 p-4 py-16">
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
          img={CruzHacks}
          title="CruzHacks 2023: Garbage Guide"
          link="https://github.com/marcus-leung/GarbageGuide"
          descriptions={data[2]}
        />
        <ProjectItem
          img={Portfolio}
          title="Portfolio Website"
          link="https://github.com/marcus-leung/portfolio"
          site="marcusleung.net"
          descriptions={data[3]}
        />
      </div>
    </div>
  );
};

export default Projects;

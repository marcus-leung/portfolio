import React from "react";
import ProjectItem from "./ProjectItem";
import SFIG from "../assets/sfig.png";
import Stock from "../assets/stock.png";
import CruzHacks from "../assets/cruzhacks.jpg";
import Portfolio from "../assets/port.png";

const Projects = () => {
  return (
    <div id="projects" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-indigo-800 mb-5 pb-5">
        Projects
      </h1>
      <div className="grid sm:grid-cols-2 gap-12">
        <ProjectItem
          img={SFIG}
          title="Slug Fund Investment Group Website"
          langs="Javascript | HTML | CSS"
          tools="React.js | Bootstrap | Github"
          link="https://github.com/marcus-leung/Slug-Fund-Investment-Group-Website"
          site="slugfundinvestmentgroup.com"
        />
        <ProjectItem
          img={Stock}
          title="Stock Market Analysis Tool"
          langs="Python"
          tools="Matplotlib | Alpha Vantage API | PyQt5 | Github"
          link="https://github.com/marcus-leung/stockmarketanalysistool"
        />
        <ProjectItem
          img={CruzHacks}
          title="CruzHacks 2023: Garbage Guide"
          langs="Python | HTML | CSS"
          tools="Flask | OpenAI API | Github"
          link="https://github.com/marcus-leung/GarbageGuide"
        />
        <ProjectItem
          img={Portfolio}
          title="Portfolio Website"
          langs="Javascript | HTML | CSS"
          tools="React.js | Tailwind | Github"
          link="https://github.com/marcus-leung/portfolio"
          site="marcusleung.net"
        />
      </div>
    </div>
  );
};

export default Projects;

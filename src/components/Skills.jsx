import React from "react";
import SkillItem from "./SkillItem";

const Skills = () => {
  return (
    <div id="skills" className="max-w-[860px] m-auto py-16">
      <h1 className="text-4xl font-bold text-center text-indigo-800 pb-5">
        Skills
        <div className="grid grid-cols-2 pt-6 font-normal font-mono text-xl md:text-2xl">
          <h2>Languages</h2>
          <h2>Tools</h2>
        </div>
      </h1>

      <div className="w-full">
        <div className="grid grid-cols-4 gap-4">
          <SkillItem
            link="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
            text="Python"
          />
          <SkillItem
            link="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
            text="Javascript"
          />
          <SkillItem
            link="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
            text="React.js"
          />
          <SkillItem
            link="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg"
            text="VS Code"
          />
          <SkillItem
            link="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg"
            text="C++"
          />
          <SkillItem
            link="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg"
            text="C"
          />
          <SkillItem
            link="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg"
            text="Bootstrap"
          />
          <SkillItem
            link="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg"
            text="Tailwind"
          />
          <SkillItem
            link="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"
            text="Java"
          />
          <SkillItem
            link="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
            text="HTML"
          />
          <SkillItem
            link="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
            text="Git"
          />
          <SkillItem
            link="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/arduino/arduino-original.svg"
            text="Arduino"
          />
        </div>
      </div>
    </div>
  );
};

export default Skills;

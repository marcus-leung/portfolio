import React from 'react';
import LanguageSkills from './LanguageSkills';
import FrameworkSkills from './FrameworkSkills';
import PlatformSkills from './PlatformSkills';

const Skills = ({ title, items }) => {
  return (
    <section id='skills' className='max-w-[860px] m-auto py-16'>
      <div className='text-center mb-16'>
        <h2 className='text-3xl md:text-4xl font-bold mb-4 text-gray-900'>
          Skills
        </h2>
        <div className='w-20 h-1 mx-auto bg-indigo-600 mb-6'></div>
        <p className='text-lg text-gray-600 max-w-2xl mx-auto'>
          These are some of the technologies I’ve worked with and continue to
          master. Each skill reflects my commitment to growth and delivering
          impactful solutions.
        </p>
      </div>
      <LanguageSkills />
      <FrameworkSkills />
      <PlatformSkills />
    </section>
  );
};

export default Skills;

// const Skills = () => {
//   return (
//     <section id="skills" className="max-w-[860px] m-auto py-16">
//       <h1 className="text-4xl font-bold text-center text-indigo-800 pb-5">
//         Skills
//         <div className="grid grid-cols-3 pt-6 font-normal font-mono text-xl md:text-2xl">
//           <h2>Languages</h2>
//           <h2>Frameworks</h2>
//           <h2>Platforms</h2>
//         </div>
//       </h1>

//       <div className="w-full">
//         <div className="grid grid-cols-4 gap-4">
//           <SkillItem
//             link="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
//             text="Python"
//           />
//           <SkillItem
//             link="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
//             text="Javascript"
//           />
//           <SkillItem
//             link="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
//             text="React.js"
//           />
//           <SkillItem
//             link="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg"
//             text="VS Code"
//           />
//           <SkillItem
//             link="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg"
//             text="C++"
//           />
//           <SkillItem
//             link="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg"
//             text="C"
//           />
//           <SkillItem
//             link="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg"
//             text="Bootstrap"
//           />
//           <SkillItem
//             link="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
//             text="Tailwind"
//           />
//           <SkillItem
//             link="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"
//             text="Java"
//           />
//           <SkillItem
//             link="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
//             text="HTML"
//           />
//           <SkillItem
//             link="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
//             text="Git"
//           />
//           <SkillItem
//             link="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/arduino/arduino-original.svg"
//             text="Arduino"
//           />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Skills;

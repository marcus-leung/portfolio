import React from 'react';
import LanguageSkills from './LanguageSkills';
import FrameworkSkills from './FrameworkSkills';
import PlatformSkills from './PlatformSkills';

const Skills = () => {
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

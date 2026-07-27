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

      <div className='flex items-start justify-between pt-10'>
        <div className='flex flex-col text-indigo-800 font-normal font-mono text-xl md:text-3xl w-1/4 justify-center items-center mt-10'>
          <h2 className='text-center'>AI & LLMs</h2>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 w-3/4'>
          {[
            'Retrieval-Augmented Generation (RAG)',
            'Tool Calling',
            'Model Context Protocol (MCP)',
            'Prompt Engineering',
          ].map((skill) => (
            <div
              key={skill}
              className='rounded-xl border border-indigo-100 bg-white px-4 py-4 text-center text-lg font-mono text-gray-700 shadow-sm'
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

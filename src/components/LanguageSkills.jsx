import React from 'react';
import SkillItem from './SkillItem';

const LanguageSkills = () => {
  return (
    <div className='flex items-start justify-between pt-6'>
      <div className='flex flex-col text-indigo-800 font-normal font-mono text-xl md:text-3xl w-1/4 justify-center items-center mt-10'>
        <h2 className='text-center'>Languages</h2>
      </div>

      <div className='grid grid-cols-3 gap-4 w-3/4'>
        <SkillItem
          link='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg'
          text='Python'
        />
        <SkillItem
          link='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg'
          text='JavaScript'
        />
        <SkillItem
          link='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg'
          text='Java'
        />
        <SkillItem
          link='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg'
          text='C++'
        />
        <SkillItem
          link='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg'
          text='C'
        />
        <SkillItem
          link='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg'
          text='HTML'
        />
      </div>
    </div>
  );
};

export default LanguageSkills;

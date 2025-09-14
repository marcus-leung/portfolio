import React from 'react';
import SkillItem from './SkillItem';

const FrameworkSkills = () => {
  return (
    <div className='flex items-start justify-between pt-6'>
      <div className='flex flex-col text-indigo-800 font-normal font-mono text-xl md:text-3xl w-1/4 justify-center items-center mt-10'>
        <h2 className='text-center'>Frameworks & Tools</h2>
      </div>

      <div className='grid grid-cols-3 gap-4 w-3/4'>
        <SkillItem
          link='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'
          text='React.js'
        />
        <SkillItem
          link='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg'
          text='Tailwind'
        />
        <SkillItem
          link='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg'
          text='Git'
        />
        <SkillItem
          link='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg'
          text='Node.js'
        />
        <SkillItem
             link="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg"
             text="Bootstrap"
           />
        <SkillItem
          link="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg"
          text='FastAPI'
        />

      </div>
    </div>
  );
};

export default FrameworkSkills;

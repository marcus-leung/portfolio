import React from 'react';
import SkillItem from './SkillItem';

const PlatformSkills = () => {
  return (
    <div className='flex items-start justify-between pt-6'>
      <div className='flex flex-col text-indigo-800 font-normal font-mono text-xl md:text-3xl w-1/4 justify-center items-center mt-10'>
        <h2 className='text-center'>Platforms</h2>
      </div>

      <div className='grid grid-cols-3 gap-4 w-3/4'>
        <SkillItem
          link='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg'
          text='AWS'
        />
        <SkillItem
          link='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg'
          text='Github'
        />
        <SkillItem
          link='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg'
          text='Docker'
        />
        <SkillItem
          link='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jira/jira-original.svg'
          text='Jira'
        />
        <SkillItem
          link='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg'
          text='Figma'
        />
        <SkillItem
          link='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg'
          text='VS Code'
        />
      </div>
    </div>
  );
};

export default PlatformSkills;

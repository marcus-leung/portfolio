import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import profile from '../assets/pfp.jpg';

const Main = () => {
  return (
    <section id='main' className='max-w-[1040px] m-auto p-4 py-20'>
      <div className='flex flex-col sm:flex-row items-center'>
        <div className='flex-1 p-5 pr-0 m-4 order-2 sm:order-1 text-center'>
          <h1 className='sm:text-5xl text-4xl font-bold text-gray-900 items-center'>
            Hi I'm Marcus Leung
          </h1>
          <h2 className='mt-5 mr-2 pr-5 text-xl text-gray-600 font-medium'>
            I am a Technology and Information Management student with a Computer
            Science minor at UC Santa Cruz, graduating in June 2025. I have a
            strong technical foundation and experience in software development,
            API sales, and product development, looking for a full time opportunity. 
            <div className='flex justify-between pt-7 w-full text-black'>
              <a
                href='https://www.linkedin.com/in/marcus-leung-582006252/'
                target='_blank'
                rel='noopener noreferrer'
                className='ml-32'
              >
                <FaLinkedin className='cursor-pointer' size={32} />
              </a>
              <a
                href='https://github.com/marcus-leung'
                target='_blank'
                rel='noopener noreferrer'
                className='mr-32'
              >
                <FaGithub className='cursor-pointer' size={32} />
              </a>
            </div>
          </h2>
        </div>
        <div className='flex-1 order-1 sm:order-2'>
          <img
            src={profile}
            alt='Profile Picture'
            className='rounded-3xl shadow-lg shadow-slate-600 border border-black'
          />
        </div>
      </div>
    </section>
  );
};

export default Main;

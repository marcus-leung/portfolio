import React from 'react';
import WorkItem from './WorkItem';
import jobs from '../data/jobs';

const Work = () => {
  return (
    <section id='work' className='max-w-[1040px] m-auto p-4 md:py-16 hide'>
      <div className='text-center mb-16'>
        <h2 className='text-3xl md:text-4xl font-bold mb-4 text-gray-900'>
          Work Experience
        </h2>
        <div className='w-20 h-1 mx-auto bg-indigo-600 mb-6'></div>
        <p className='text-lg text-gray-600 max-w-2xl mx-auto'>
          Explore my professional journey and contributions. Each role showcases
          my diverse skill set and adaptability, highlighting my ability to
          excel in various domains.
        </p>
      </div>
      {jobs.map((item, index) => (
        <WorkItem
          key={index}
          date={item.date}
          company={item.company}
          role={item.role}
          duration={item.duration}
          details={item.details}
        />
      ))}
    </section>
  );
};

export default Work;

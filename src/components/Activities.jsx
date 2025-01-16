import React from 'react';
import ActivitiesItem from './ActivitiesItem';
import clubs from '../data/clubs';

const Activities = () => {
  return (
    <div id='activities' className='max-w-[1040px] m-auto p-4 md:py-16 hide'>
      <h1 className='text-4xl font-bold text-center text-indigo-800 pb-5'>
        Leadership & Extracurricular Activities
      </h1>
      {clubs.map((item, id) => (
        <ActivitiesItem
          key={id}
          date={item.date}
          company={item.company}
          role={item.role}
          duration={item.duration}
          details={item.details}
        />
      ))}
    </div>
  );
};

export default Activities;

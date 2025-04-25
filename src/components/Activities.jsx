import React from 'react';
import ActivitiesItem from './ActivitiesItem';
import clubs from '../data/clubs';

const Activities = () => {
  return (
    <section id='activities' className='max-w-[1040px] m-auto p-4 md:py-16 hide'>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Leadership & Extracurricular Activities</h2>
          <div className="w-20 h-1 mx-auto bg-indigo-600 mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover my leadership roles and extracurricular activities. Each experience highlights my versatility, teamwork, and ability to take on diverse responsibilities.
          </p>
        </div>
      {clubs.map((item, index) => (
        <ActivitiesItem
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

export default Activities;

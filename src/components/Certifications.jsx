import React from 'react';
import CCP from '../assets/AWS_CCP.png';

const Certifications = () => {
  return (
    <section id='certifications' className='max-w-[1040px] m-auto p-4 py-20'>
      <div className='flex flex-col sm:flex-row items-center'>
        <div className='flex ml-5'>
          <img
            src={CCP}
            alt='AWS Certified Cloud Practitioner Badge'
            className='hover:scale-110 transition duration-500'
          />
        </div>
        <div className='flex-1 text-center'>
          <h1 className='sm:text-5xl text-4xl font-bold text-indigo-800 text-center'>
            AWS Certified Cloud Practitioner
          </h1>
          <h2 className='mt-5 text-xl text-indigo-800 font-medium'>
            Issued March 2024 - Expires March 2027 <br />
            <a
              href='https://www.credly.com/badges/eee23d1a-072f-4c70-9a14-2ad01b01f654'
              target='_blank'
              rel='noopener noreferrer'
            >
              <button className='bg-indigo-800 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-3'>
                Show Credentials
              </button>
            </a>
          </h2>
        </div>
      </div>
    </section>
  );
};

export default Certifications;

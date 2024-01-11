import React from 'react';
import { MdMilitaryTech } from 'react-icons/md';
import SectionTitle from './SectionTitle';

const Skills = () => {
  return (
    <div className=' w-full flex flex-col justify-between  items-center mb-8 px-6 md:px-8 lg:px-4'>
      <SectionTitle title={'Skills'} iconName={'Skills'} />

      <div className=' w-full flex flex-col md:flex-row items-center md:justify-between mt-2'>
        <section className='flex flex-col py-6 px-8  w-full mb-8 md:mb-0 md:w-[45%] h-[300px] rounded-lg border-2 border-solid border-[#B4B4B3] hover:border-[#26577C] hover:shadow-lg  '>
          <h2 className='w-full text-left font-semibold text-lg  md:text-xl mb-4 text-[#E55604]'>
            Frontend
          </h2>
          <div className='w-full flex-1 flex flex-row flex-wrap '>
            <div className='w-[50%] h-[25%] flex flex-row'>
              <MdMilitaryTech className='mr-2 text-2xl text-[#26577C]' />
              <p>HTML5</p>
            </div>
            <div className='w-[50%] h-[25%] flex flex-row  '>
              <MdMilitaryTech className='mr-2 text-2xl text-[#26577C]' />
              <p>CSS3</p>
            </div>
            <div className='w-[50%] h-[25%] flex flex-row  '>
              <MdMilitaryTech className='mr-2 text-2xl text-[#26577C]' />
              <p>Javascript</p>
            </div>
            <div className='w-[50%] h-[25%] flex flex-row  '>
              <MdMilitaryTech className='mr-2 text-2xl text-[#26577C]' />
              <p>React.js</p>
            </div>
            <div className='w-[50%] h-[25%] flex flex-row  '>
              <MdMilitaryTech className='mr-2 text-2xl text-[#26577C]' />
              <p>Next.js</p>
            </div>
            <div className='w-[50%] h-[25%] flex flex-row  '>
              <MdMilitaryTech className='mr-2 text-2xl text-[#26577C]' />
              <p>Tailwind</p>
            </div>
            <div className='w-[50%] h-[25%] flex flex-row  '>
              <MdMilitaryTech className='mr-2 text-2xl text-[#26577C]' />
              <p>Bootstrap</p>
            </div>
            <div className='w-[50%] h-[25%] flex flex-row  '>
              <MdMilitaryTech className='mr-2 text-2xl text-[#26577C]' />
              <p>Git</p>
            </div>
          </div>
        </section>
        <section className='flex flex-col py-6 px-8  w-full md:w-[45%] h-[300px] rounded-lg border-2 border-solid border-[#B4B4B3] hover:border-[#26577C] hover:shadow-lg  '>
          <h2 className='w-full text-left font-semibold text-lg  md:text-xl mb-4 text-[#E55604]'>
            Backend
          </h2>
          <div className='w-full flex-1 flex flex-col '>
            <div className='w-full h-[25%] flex flex-row'>
              <MdMilitaryTech className='mr-2 text-2xl text-[#26577C]' />
              <p>Node.js</p>
            </div>
            <div className='w-full h-[25%] flex flex-row  '>
              <MdMilitaryTech className='mr-2 text-2xl text-[#26577C]' />
              <p>SQL</p>
            </div>
            <div className='w-full h-[25%] flex flex-row  '>
              <MdMilitaryTech className='mr-2 text-2xl text-[#26577C]' />
              <p>Postgresql</p>
            </div>
            <div className='w-full h-[25%] flex flex-row  '>
              <MdMilitaryTech className='mr-2 text-2xl text-[#26577C]' />
              <p>Express</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Skills;

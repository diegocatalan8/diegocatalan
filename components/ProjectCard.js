import React from 'react';
import Tooltip from './Tooltip';
import Icon from './Icon';
import Image from 'next/image';

const ProjectCard = ({info}) => {
  return (
   
        <div className={`${info.className} Card group/image  hover:shadow-xl flex flex-col justify-between rounded-xl p-2 px w-full md:max-w-[300px] h-[390px] border-2 border-solid border-[#B4B4B3] hover:border-[#26577C]`}>
          <figure className={`${info.bgFigure} relative overflow-hidden w-full h-[150px] rounded-xl`}>
            <Image
              className='absolute transition ease-in-out delay-150 group-hover/image:-translate-y-1 group-hover/image:scale-110 top-6 left-6 rounded-xl h-full w-full'
              src={info.image}
              alt={info.alt}
            />
          </figure>

          <h3 className='font-semibold text-xl text-[#26577C] mt-2'>
            {info.name}
          </h3>

          <p className='text-[#000] mt-2'>
            {info.description}
          </p>

          <section className='flex flex-row p-1 w-full mt-2'>
            {info.tech.map((item)=>(
                <Tooltip key={item.icon} className='mr-2' text={item.nameIcon}>
                    <Icon name={item.icon} className={`${item.color} text-[30px]`} />
                </Tooltip>
            ))}
          </section>

          <div className='flex flex-row justify-start mt-2'>
          <a href={info.linkToGithub} target="_blank">
            <button className='group/button mr-2 rounded-lg flex flex-row justify-between items-center w-[40px] h-[40px] p-2 border-[#B4B4B3] hover:border-[#26577C] hover:bg-[#f3f3f3]  border-2 border-solid '>
              <Icon name='Octocat' className='group-hover/button:text-[#26577C] text-[20px] text-[#B4B4B3]' />
            </button>
          </a>

          {info.demo ? (
            <a href={info.linkToDemo} target="_blank">
              <button className='group/button rounded-lg hover:w-[100px] transition-all ease-in-out duration-300  flex flex-row justify-between items-center w-[90px] h-[40px] p-2 border-[#B4B4B3] hover:border-[#26577C] hover:bg-[#f3f3f3]  border-2 border-solid'>
                <span className='text-[#B4B4B3] group-hover/button:text-[#26577C]'>
                  Demo
                </span>
                <Icon name={'Link'} className='transition-all ease-in-out duration-300 text-[20px] text-[#B4B4B3] group-hover/button:text-[#E55604] group-hover/button:rotate-45' />
              </button>
            </a>
            ) : ''
          }
            
          </div>
        </div>
      
  )
}

export default ProjectCard;

import React from 'react'
import Image from 'next/image';

 const ProfessionalCard = ({className, image, alt, title, subtitle, year, link='', onClickButton = ()=>{}}) => {
  return (
    <div className={`${className} group relative flex flex-col justify-between items-center  md:flex-row md:justify-start  p-4  rounded-xl w-full h-fit border-2 border-solid border-[#B4B4B3] hover:border-[#26577C] hover:shadow-md `}>
      {link !== '' ? <a href={link} className='absolute top-2 right-2' target='blank'><button className='p-1 hover:underline  text-[13px] md:text-[14px] text-[#26577C] '>View More</button></a> : <button onClick={onClickButton} className='p-1 rounded-lg hover:underline text-[#26577C] text-sm absolute top-2 right-2'>View More</button>}
      <div className='w-full md:w-[20%] my-2 md:my-0 md:mr-2 '>
          <figure className='flex flex-row justify-center items-center w-full h-full'>
            <Image
              className='w-[60px] h-[60px] md:w-[80px] md:h-[80px]'
              src={image}
              alt={alt}
            />
          </figure>
        </div>
        <div className=' flex flex-col justify-between text-center md:text-left w-full md:w-[80%]'>
          
          <h2 className='font-semibold text-lg  md:text-xl text-[#E55604]'>
            {title}
          </h2>
          <p className='font-semibold text-[14px] md:text-[15px] text-[#26577C]'>
            {subtitle}
          </p>
          <p className=' text-[14px] md:text-[15px] text-[#000]'>
            {year}
          </p>
          
        </div>
      </div>
  )
}

export default ProfessionalCard;

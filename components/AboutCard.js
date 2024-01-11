import React from 'react'
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Image from 'next/image';
import diegopic from '@/public/diegoweb3.png'
import Button from './Button';


 const AboutCard = () => {
  return (
    <div className='w-full flex flex-col items-center md:flex-row md:justify-between my-8 px-6 md:px-8 lg:px-4'>

        <section className='w-44 h-44 my-4 md:my-0 md:mb-0 md:mr-2'>
            <figure className='w-full h-full rounded-full'>
                <Image className='w-full h-full rounded-full' src={diegopic} alt='Profile Picture'/>
            </figure>
        </section>

        <section className='flex flex-col justify-between w-full md:w-[70%]'>
            
            <div className='flex flex-col justify-center h-[50%] w-full'>
                <p className='text-4xl w-full my-2 font-bold text-[#26577C] text-center md:text-left'>Diego Catalán</p>
                <p className='w-full text-xl mb-2 text-[#000] text-center md:text-left'>I am apassionate Full Stack Engineer.</p>
            </div>
            
            <div className='flex flex-row py-4  flex-wrap justify-center md:justify-start items-center w-full h-[50%]'>   

                    <Button classNameButton={'mr-3 text-[#0484c7] hover:border-[#0484c7] '} name='Linkedin' nameIcon='Linkedin' link='https://www.linkedin.com/in/diego-catal%C3%A1n-15b20b230'/>
                    <Button  name='Github' nameIcon='Github' link='https://github.com/diegocatalan8'/>
            </div>
        </section>

    </div>
  )
}

export default AboutCard;

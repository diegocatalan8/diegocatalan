"use client"
import React, { useEffect, useState } from 'react'
import { FaSun, FaMoon } from "react-icons/fa";
import { IoIosDocument } from "react-icons/io";
import Image from 'next/image';
import diegopic from '@/public/diegoweb3.png'
import Button from './Button';



const Header = () => {

    const [isImageAndTextVisible, setIsImageAndTextVisible] = useState(false);

    useEffect(()=>{
       const  handleScroll = () =>{
            const scrollY = window.scrollY;
            
            if(scrollY <= 210){
                setIsImageAndTextVisible(false);
            }
            else{
                setIsImageAndTextVisible(true);
            }
        }

        window.addEventListener("scroll", handleScroll);

        return()=>{
            window.removeEventListener('scroll', handleScroll);
        }
    }, [])

    

    
   
  return (
    <div className='Header  bg-white bg-opacity-90 mx-auto max-w-3xl px-6 md:px-8 lg:px-4 py-2 sticky top-0 z-10'>
            <header className={`flex flex-row ${isImageAndTextVisible ? 'justify-between' : 'justify-end'} w-full h-full`}>
                    
                    <section className={`${isImageAndTextVisible ? 'opacity-100  translate-y-0' : 'opacity-0 -translate-y-full'}    transform  transition-transform duration-300 ease-in-out flex flex-row justify-between items-center w-fit`}>
                        <figure 
                        className='bg-gray-500 rounded-full h-[50px] w-[50px] mr-3'>
                            <Image className='w-full h-full rounded-full' src={diegopic} alt='Profile Picture'/>
                        </figure>
                        <p className='flex flex-col justify-center'>
                            <span className='text-2xl font-semibold text-[#26577C]'>Diego Catalán</span>
                        </p>
                    </section>

                    <div className='flex flex-row justify-between items-center'>
                        
                   

                    <Button name='Resume' nameIcon='Document' link='https://drive.google.com/file/d/1OsPaqbmQD5L9Arm1TKij-nPQjblyqfFn/view?usp=sharing'/>

                        <button className='hidden h-[60px] w-[60px]  flex-row justify-end items-center'>
                            <FaSun className='h-[30px] w-[30px]'/>
                        </button>
                    </div>

            </header>
    </div>
  )
}

export default Header;
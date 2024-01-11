import React from 'react'
import AboutCard from './AboutCard';
import  Experience  from './Experience';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';

const Main = () => {

  return (
    <div className=' Header mx-auto max-w-3xl'>
        <main className='flex flex-col w-full'>
            <AboutCard/>
            <Experience/>
            <Skills/>
            <Projects/>
            <Contact/>
        </main>
    </div>
  )
}

export default Main;
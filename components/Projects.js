import React from 'react';
import SectionTitle from './SectionTitle';
import ProjectCard from './ProjectCard';
import Bistro from '@/public/bistro-pos.png';
import CloiGT from '@/public/cloigt.png';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Projects = () => {

  const projects = [
    {

      id:1,
      className: '',
      alt: 'CLOi-GT',
      name: 'CLOi-GT',
      description: 'Interactive interface to display restaurants menus, dishes, prices, and special options.',
      demo: true,
      bgFigure:'bg-[#e25b29]',
      image: CloiGT,
      linkToGithub: 'https://github.com/diegocatalan8/CLOi-GT',
      linkToDemo: 'https://cloi-gt.vercel.app',
      tech: [{nameIcon: 'Next.js', icon: 'Next',}, {nameIcon: 'React.js', icon:'React',}, {nameIcon:'Bootstrap', icon:'Bootstrap',}, {nameIcon:'Postres', icon:'Postgres',}],
      demo: true

    },

  
    
  ]

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2.2
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <div className=' w-full flex flex-col justify-between items-center mb-8 px-6 md:px-8 lg:px-4'>
      <SectionTitle title={'Projects'} iconName={'Projects'} />

      
      <Carousel className='mt-2 w-full' responsive={responsive}>
      {
        projects.map((item)=>(
            <ProjectCard key={item.id} info={item}/>
        ))
      }
      </Carousel>
     
    
    </div>
  );
};

export default Projects;

/**
 <div className='mt-2 w-full flex flex-row flex-wrap justify-center md:justify-between'>
  </div>
 */
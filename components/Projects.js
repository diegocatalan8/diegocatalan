import React from 'react';
import SectionTitle from './SectionTitle';
import ProjectCard from './ProjectCard';
import Bistro from '@/public/bistro-pos.png';
import CloiGT from '@/public/cloigt.png'

const Projects = () => {

  const projects = [
    {
      id:1,
      className: '',
      alt: 'Bistro POS',
      name: 'Bistro POS',
      description: 'Bistro POS is a comprehensive system designed to optimize the operational management of small restaurants.',
      demo: true,
      bgFigure:'bg-[#2f69ff]',
      image: Bistro,
      linkToGithub: 'https://github.com/diegocatalan8/bistro',
      linkToDemo: null,
      tech: [{nameIcon: 'Next.js', icon: 'Next',}, {nameIcon: 'React.js', icon:'React',}, {nameIcon:'Tailwind', icon:'Tailwind'}, {nameIcon:'Postres', icon:'Postgres',}],
      demo: false

    },

    {

      id:2,
      className: 'mt-8 md:mt-0',
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

    }
  ]

  return (
    <div className=' w-full flex flex-col justify-between items-center mb-8 px-6 md:px-8 lg:px-4'>
      <SectionTitle title={'Projects'} iconName={'Projects'} />
      
      <div className='mt-2 w-full flex flex-row flex-wrap justify-center md:justify-between'>
        {
          projects.map((item)=>(
              <ProjectCard key={item.id} info={item}/>
          ))
        }
      </div>
      
    </div>
  );
};

export default Projects;
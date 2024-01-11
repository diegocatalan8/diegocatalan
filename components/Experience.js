import React, {useState} from 'react';
import UMG from '@/public/UMG.png';
import CHILLTEPE from '@/public/CHILLTEPE.jpeg';
import Modal from './Modal';
import ProfessionalCard from './ProfessionalCard';
import SectionTitle from './SectionTitle';
import { Dialog } from '@headlessui/react'

const Experience = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () =>{
    setIsModalOpen(true);
  }

  const closeModal = () =>{
    setIsModalOpen(false);
  }

  

  return (
    <div className=' w-full flex flex-col justify-between items-center mb-8 px-6 md:px-8 lg:px-4'>

      <SectionTitle title={'Education'} iconName={'Education'}/>

      <ProfessionalCard className={'mt-2'} image={UMG} alt={'UMG'} title='Mariano Gálvez University Of Guatemala' subtitle='Master Of Cybersecurity' year='Ene. 2024 - Present' link={'https://sistemas.umgedu.org/seguridad-informatica/'}/> 
      <ProfessionalCard className={'mt-8'} image={UMG} alt={'UMG'} title='Mariano Gálvez University Of Guatemala' subtitle='Bachelor Of Information Systems Engineering and Computer Science' year='Ene. 2019 - Nov. 2023' link={'https://sistemas.umgedu.org/pregrado/'}/> 
      
  
      <SectionTitle className={'mt-8'} title={'Professional Experience'} iconName={'Work'}/>
    

      <ProfessionalCard className={'mt-2'} image={CHILLTEPE} alt={'CHILLTEPE'} title='Chilltepe S.A.' subtitle='Frontend Developer' year='Dic. 2021 - Nov. 2023' onClickButton={openModal}/> 
        

      <Modal closeModal={closeModal} isModalOpen={isModalOpen}>
          <Dialog.Title as="h3" className="my-8 text-xl text-center font-semibold leading-6 text-[#26577C]">
          Frontend Developer At <span className='text-[#E55604]'>Chilltepe S.A.</span>
          </Dialog.Title>
          <div className="mt-2">
            <ol className='w-full list-disc  text-left'>
                <li className='mb-2'>
                Led front-end development using technologies such as HTML5, CSS3, Javascript, React.js,
                Tailwind and Git, achieving visually appealing and high-performance web interfaces.
                </li>
                <li className='mb-2'>
                Creating robust, scalable, and maintainable components in React.js, increasing development efficiency by 20%.
                </li>
                <li className='mb-2'>
                Identifying and resolving issues in the software, optimizing performance by 20%.
                </li>
                
            </ol>
      </div>
      </Modal>
     
    </div>
  );
};

export default Experience;

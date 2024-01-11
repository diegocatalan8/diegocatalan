import React, {useState} from 'react';
import UMG from '@/public/UMG.png';
import CHILLTEPE from '@/public/CHILLTEPE.jpeg';
import Modal from './Modal';
import ProfessionalCard from './ProfessionalCard';
import SectionTitle from './SectionTitle';

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
        

      <Modal closeModal={closeModal} isModalOpen={isModalOpen}/>
     
    </div>
  );
};

export default Experience;

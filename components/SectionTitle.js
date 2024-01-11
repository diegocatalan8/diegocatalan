import React from 'react'
import Icon from './Icon';

const SectionTitle = ({className, title, iconName}) => {
  return (
    <div className={`${className} w-full flex flex-row justify-start items-center`}>
        <Icon name={iconName} className='mr-2 text-xl md:text-2xl text-[#26577C]' />
        <h2 className=' font-bold text-left py-2 text-xl md:text-2xl text-[#26577C] '>
          {title}
        </h2>
    </div>
  )
}

export default SectionTitle;

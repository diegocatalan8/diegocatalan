import React from 'react'
import Icon from './Icon';

const Button = ({ name = 'Button', nameIcon = 'Document', link = '#', classNameButton='hover:border-black', classNameIcon }) => {
  return (
    <a href={link} target='blank'>
            <button className={`hover:shadow-lg  p-3 flex flex-row justify-start items-center h-[50px] w-[120px] border-2 border-solid border-[#B4B4B3]  rounded-lg ${classNameButton}`}>
                        <Icon name={nameIcon} className={`text-3xl mr-2 ${classNameIcon}`}/>
                        <span className='font-semibold'>{name}</span>
            </button>  
    </a>

  )
}

export default Button;

import React from 'react'

const Tooltip = ({children, text, className}) => {
  return (
    <div className={`relative group  ${className}`}>
        <div className="text-[12px] absolute bg-gray-800 left-[50%] text-white p-2 rounded-md bottom-9 opacity-0 invisible transition-opacity transform -translate-x-1/2 duration-300 ease-in-out group-hover:opacity-100 group-hover:visible">
            {text}
        </div>
        {children}
    </div>
  )
}


export default  Tooltip;
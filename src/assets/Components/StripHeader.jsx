import React from 'react'
import { FaSearch } from "react-icons/fa";
import { MdOutlineModeNight } from 'react-icons/md';
import { FaRegBell } from 'react-icons/fa';
import { BsBrowserChrome } from 'react-icons/bs';
import { ImProfile } from 'react-icons/im';

const StripHeader = () => {
  return (
<div className="h-[80px] w-full flex justify-between items-center pl-[30px]">
      <div className="relative">
        <input
          type="text"
          placeholder="Search task"
          className="h-[40px] w-[380px] pl-10 pr-4 rounded-2xl border border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
      </div>

      <div className="flex justify-center items-center gap-[20px]">
           <div className="h-[40px] w-[40px]  bg-gray-100  rounded-full text-[20px] flex justify-center items-center"><MdOutlineModeNight /></div>
           <div className="h-[40px] w-[40px]  bg-gray-100  rounded-full text-[20px] flex justify-center items-center"><FaRegBell /></div>
           <div className="h-[40px] w-[40px]  bg-gray-100  rounded-full text-[20px] flex justify-center items-center"><BsBrowserChrome /></div>
           <div className="h-[40px] w-[40px]  bg-gray-100  rounded-full text-[20px] flex justify-center items-center"><ImProfile /></div>

      </div>
    
    
    
    
    
    </div>  
    


)
}

export default StripHeader
import React from 'react';
import { FaSearch } from "react-icons/fa";
import { MdOutlineModeNight } from 'react-icons/md';
import { FaRegBell } from 'react-icons/fa';
import { BsBrowserChrome } from 'react-icons/bs';
import { ImProfile } from 'react-icons/im';
import { GiHamburgerMenu } from "react-icons/gi";

const StripHeader = ({ toggleSidebar }) => {
  return (
    <div className="h-[80px] w-full flex justify-between items-center px-[20px] ">
      {/* Left Section - Hamburger & Search */}
      <div className="flex items-center gap-4">
        {/* Hamburger Button (Visible only on small screens) */}
        <button onClick={toggleSidebar} className="block sm:hidden text-2xl p-2">
          <GiHamburgerMenu />
        </button>

        {/* Search Bar */}
        <div className="relative">
          <input
            type="text"
            placeholder="Search task"
            className="h-[40px] w-[180px] sm:w-[350px]  md:w-[280px]  md:ml-[50px] lg:ml-[50px]  pl-10 pr-4 rounded-2xl border border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 sm:ml-0 md:ml-[50px]  lg:ml-[60px]" />
        </div>
      </div>

      {/* Right Section - Icons */}
      <div className="flex justify-center items-center gap-[20px]">
        <div className="hidden sm:flex h-[40px] w-[40px] bg-gray-100 rounded-full text-[20px] flex justify-center items-center">
          <MdOutlineModeNight />
        </div>
        <div className="hidden sm:flex h-[40px] w-[40px] bg-gray-100 rounded-full text-[20px] flex justify-center items-center">
          <FaRegBell />
        </div>
        <div className="hidden h-[40px] w-[40px] bg-gray-100 rounded-full text-[20px] flex justify-center items-center">
          <BsBrowserChrome />
        </div>
        <div className="h-[40px] w-[40px] bg-gray-100 rounded-full text-[20px] flex justify-center items-center">
          <ImProfile />
        </div>
      </div>
    </div>
  );
};

export default StripHeader;
import React from 'react';
import { BiAbacus } from 'react-icons/bi';
import { SlCalender } from 'react-icons/sl';
import { LuTicketSlash } from 'react-icons/lu';
import { FaRegFolderOpen } from 'react-icons/fa';
import { CiMemoPad } from 'react-icons/ci';
import { GrProjects } from 'react-icons/gr';
import { HiMiniQuestionMarkCircle } from 'react-icons/hi2';
import { IoMdSettings } from 'react-icons/io';
import { IoMdLogOut } from 'react-icons/io';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="h-full w-[250px] bg-gray-800 text-white sm:w-[200px] transition-all duration-300">
      <div className="h-full">
        <h1 className="text-4xl font-bold flex justify-center items-center text-orange-400">
          Panze
        </h1>
        <h1 className="text-lg font-bold flex justify-center items-center mt-[30px]">DASHBOARDS</h1>
        <nav className="mt-[10px] flex flex-col justify-center items-center">
          <ul>
            <Link
              to={"/overf"}
              className="py-2 bg-orange-400 rounded flex justify-center items-center gap-[10px] text-[20px] pr-[40px]"
            >
              <GrProjects /> Overview
            </Link>
            <Link
              to={"/calander"}
              className="py-2 hover:bg-orange-400 rounded flex justify-center items-center gap-[10px] text-[20px] pr-[50px]"
            >
              <SlCalender /> Calendar
            </Link>
            <Link
              to={"/table"}
              className="py-2 hover:bg-orange-400 rounded flex justify-center items-center gap-[10px] text-[20px] pr-[65px]"
            >
              <LuTicketSlash /> Table
            </Link>
            <li className="py-2 hover:bg-orange-400 rounded flex justify-center items-center gap-[10px] text-[20px] pr-[10px]">
              <FaRegFolderOpen /> File Manager
            </li>
            <li className="py-2 hover:bg-orange-400 rounded flex justify-center items-center gap-[10px] text-[20px] pr-[65px]">
              <CiMemoPad /> Kanban
            </li>
            <li className="py-2 hover:bg-orange-400 rounded flex justify-center items-center gap-[10px] text-[20px] pr-[60px]">
              <GrProjects /> Projects
            </li>
            <li className="py-2 hover:bg-orange-400 rounded flex justify-center items-center gap-[10px] text-[20px] pr-[80px]">
              <SlCalender /> Tasks
            </li>
          </ul>
          <h1 className="text-lg font-bold flex justify-center items-center mt-[30px]">
            ADMINISTRATOR
          </h1>
          <ul>
            <li className="py-2 hover:bg-orange-400 rounded flex justify-center items-center gap-[10px] text-[20px] mt-[10px] pr-[25px]">
              <GrProjects /> Auth Pages
            </li>
            <li className="py-2 hover:bg-orange-400 rounded flex justify-center items-center gap-[10px] text-[20px] pr-[25px]">
              <GrProjects /> Extra Pages
            </li>
            <li className="py-2 hover:bg-orange-400 rounded flex justify-center items-center gap-[10px] text-[20px] pr-[63px]">
              <GrProjects /> Layout
            </li>
          </ul>

          <h1 className="text-lg font-bold flex justify-center items-center mt-[30px] pr-[45px]">
            SETTINGS
          </h1>
          <ul>
            <li className="py-2 hover:bg-orange-400 rounded flex justify-center items-center gap-[10px] text-[20px] mt-[10px] pr-[58px]">
              <HiMiniQuestionMarkCircle /> Support
            </li>
            <li className="py-2 hover:bg-orange-400 rounded flex justify-center items-center gap-[10px] text-[20px] pr-[65px]">
              <IoMdSettings /> Setting
            </li>
            <li className="py-2 hover:bg-orange-400 rounded flex justify-center items-center gap-[10px] text-[20px] pr-[65px]">
              <IoMdLogOut /> Logout
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;

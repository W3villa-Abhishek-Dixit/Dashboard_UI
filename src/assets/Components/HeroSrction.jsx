import React from 'react';
import { HiOutlineMenu } from 'react-icons/hi';
import { FaRegClock } from 'react-icons/fa';
import avtar1 from '../images/avtar1.png';

const HeroSection = () => {
  return (
    <div className="h-auto w-full bg-gray-100 p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 ">
        
        {/* Card 1 */}
        <div className="h-[150px] w-full max-w-[300px] sm:max-w-[330px] md:max-w-[280px] lg:max-w-[370px] rounded-[15px] bg-white p-4 flex flex-col md:mx-[40px] lg:mx-0  ">
          <div className="text-[16px] font-bold flex justify-between items-center">
            Project Dashboard
            <div className="text-[20px]"><HiOutlineMenu /></div>
          </div>
          <div className="text-[12px] flex justify-start items-center pt-2">
            Create a dashboard design
          </div>
          <div className="flex justify-between items-center mt-4 text-[12px]">
            <div className="flex gap-1.5 items-center text-orange-400">
              <FaRegClock /> Update 5 hours ago
            </div>
            <div className="flex items-center">
              <img src={avtar1} alt="Avatar" className="h-8 w-8 rounded-full border-2 border-white" />
              <img src={avtar1} alt="Avatar 2" className="h-8 w-8 rounded-full border-2 border-white -ml-3" />
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="h-[150px] w-full max-w-[300px] sm:max-w-[330px] md:max-w-[280px] lg:max-w-[370px] rounded-[15px] bg-white p-4 flex flex-col md:mx-[20px] lg:mx-0">
          <div className="text-[16px] font-bold flex justify-between items-center">
            Project Dashboard
            <div className="text-[20px]"><HiOutlineMenu /></div>
          </div>
          <div className="text-[12px] flex justify-start items-center pt-2">
            Create a dashboard design
          </div>
          <div className="flex justify-between items-center mt-4 text-[12px]">
            <div className="flex gap-1.5 items-center text-orange-400">
              <FaRegClock /> Update 5 hours ago
            </div>
            <div className="flex items-center">
              <img src={avtar1} alt="Avatar" className="h-8 w-8 rounded-full border-2 border-white" />
              <img src={avtar1} alt="Avatar 2" className="h-8 w-8 rounded-full border-2 border-white -ml-3" />
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="h-[150px] w-full max-w-[300px] sm:max-w-[330px] md:max-w-[280px] lg:max-w-[370px] rounded-[15px] bg-white p-4 flex flex-col md:mx-[40px] lg:mx-0">
          <div className="text-[16px] font-bold flex justify-between items-center">
            Project Dashboard
            <div className="text-[20px]"><HiOutlineMenu /></div>
          </div>
          <div className="text-[12px] flex justify-start items-center pt-2">
            Create a dashboard design
          </div>
          <div className="flex justify-between items-center mt-4 text-[12px]">
            <div className="flex gap-1.5 items-center text-orange-400">
              <FaRegClock /> Update 5 hours ago
            </div>
            <div className="flex items-center">
              <img src={avtar1} alt="Avatar" className="h-8 w-8 rounded-full border-2 border-white" />
              <img src={avtar1} alt="Avatar 2" className="h-8 w-8 rounded-full border-2 border-white -ml-3" />
            </div>
          </div>
        </div>

        {/* Card 4 */}
        <div className="h-[150px] w-full max-w-[300px] sm:max-w-[330px] md:max-w-[280px] lg:max-w-[370px] rounded-[15px] bg-white p-4 flex flex-col md:mx-[20px] lg:mx-0 ">
          <div className="text-[16px] font-bold flex justify-between items-center">
            Project Dashboard
            <div className="text-[20px]"><HiOutlineMenu /></div>
          </div>
          <div className="text-[12px] flex justify-start items-center pt-2">
            Create a dashboard design
          </div>
          <div className="flex justify-between items-center mt-4 text-[12px]">
            <div className="flex gap-1.5 items-center text-orange-400">
              <FaRegClock /> Update 5 hours ago
            </div>
            <div className="flex items-center">
              <img src={avtar1} alt="Avatar" className="h-8 w-8 rounded-full border-2 border-white" />
              <img src={avtar1} alt="Avatar 2" className="h-8 w-8 rounded-full border-2 border-white -ml-3" />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default HeroSection;

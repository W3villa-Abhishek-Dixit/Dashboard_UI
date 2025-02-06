import React from 'react'
import { HiOutlineMenu } from 'react-icons/hi'
import { FaRegClock } from 'react-icons/fa'
import { FaUserFriends } from 'react-icons/fa'
import avtar1 from '../images/avtar1.png'
const HeroSrction = () => {
  return (
  <div className="h-auto sm:h-[180px] w-full flex flex-wrap justify-center items-center  sm:gap-[10px] bg-gray-100">
  {/* Card 1 */}
  <div className="h-[130px] w-[360px] rounded-[15px] mt-[15px] sm:ml-[26px] flex flex-col bg-white">
    <div className="text-[16px] font-bold flex justify-evenly items-center mt-[10px]">
      Project Dashboard
      <div className="text-[20px]"> <HiOutlineMenu /></div>
    </div>
    <div className="text-[12px] flex justify-center items-center pr-[85px] pt-[10px]">Create a dashboard design</div>
    <div className="flex justify-evenly items-center mt-[10px] text-[12px]">
      <div className="flex gap-1.5 items-center pr-[20px]">
        <div className="text-orange-400"><FaRegClock /> </div> Update 5 hours ago
      </div>
      <div className="flex items-center">
        <img src={avtar1} alt="Avatar" className="h-8 w-8 rounded-full border-2 border-white" />
        <img src={avtar1} alt="Avatar 2" className="h-8 w-8 rounded-full border-2 border-white -ml-3" />
      </div>
    </div>
  </div>

  {/* Card 2 */}
  <div className="h-[130px] w-[360px] rounded-[15px] mt-[15px] flex flex-col bg-white">
    <div className="text-[16px] font-bold flex justify-evenly items-center mt-[10px]">
      Project Dashboard
      <div className="text-[20px]"> <HiOutlineMenu /></div>
    </div>
    <div className="text-[12px] flex justify-center items-center pr-[85px] pt-[10px]">Create a dashboard design</div>
    <div className="flex justify-evenly items-center mt-[10px] text-[12px]">
      <div className="flex gap-1.5 items-center pr-[20px]">
        <div className="text-orange-400"><FaRegClock /></div> Update 5 hours ago
      </div>
      <div className="flex items-center">
        <img src={avtar1} alt="Avatar" className="h-8 w-8 rounded-full border-2 border-white" />
        <img src={avtar1} alt="Avatar 2" className="h-8 w-8 rounded-full border-2 border-white -ml-3" />
      </div>
    </div>
  </div>

  {/* Card 3 */}
  <div className="h-[130px] w-[360px] rounded-[15px] mt-[15px] flex flex-col bg-white">
    <div className="text-[16px] font-bold flex justify-evenly items-center mt-[10px]">
      Project Dashboard
      <div className="text-[20px]"> <HiOutlineMenu /></div>
    </div>
    <div className="text-[12px] flex justify-center items-center pr-[85px] pt-[10px]">Create a dashboard design</div>
    <div className="flex justify-evenly items-center mt-[10px] text-[12px]">
      <div className="flex gap-1.5 items-center pr-[20px]">
        <div className="text-orange-400"><FaRegClock /></div> Update 5 hours ago
      </div>
      <div className="flex items-center">
        <img src={avtar1} alt="Avatar" className="h-8 w-8 rounded-full border-2 border-white" />
        <img src={avtar1} alt="Avatar 2" className="h-8 w-8 rounded-full border-2 border-white -ml-3" />
      </div>
    </div>
  </div>

  {/* Card 4 */}
  <div className="h-[130px] w-[360px] rounded-[15px] mt-[15px] flex flex-col bg-white">
    <div className="text-[16px] font-bold flex justify-evenly items-center mt-[10px]">
      Project Dashboard
      <div className="text-[20px]"> <HiOutlineMenu /></div>
    </div>
    <div className="text-[12px] flex justify-center items-center pr-[85px] pt-[10px]">Create a dashboard design</div>
    <div className="flex justify-evenly items-center mt-[10px] text-[12px]">
      <div className="flex gap-1.5 items-center pr-[20px]">
        <div className="text-orange-400"><FaRegClock /></div> Update 5 hours ago
      </div>
      <div className="flex items-center">
        <img src={avtar1} alt="Avatar" className="h-8 w-8 rounded-full border-2 border-white" />
        <img src={avtar1} alt="Avatar 2" className="h-8 w-8 rounded-full border-2 border-white -ml-3" />
      </div>
    </div>
  </div>
</div>


    
  )
}

export default HeroSrction
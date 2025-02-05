import React from 'react'
import { FaBars, FaRegUserCircle } from 'react-icons/fa'
import { MdKeyboardArrowRight } from 'react-icons/md'
import { IoIosArrowDown } from "react-icons/io";
import { CiClock1 } from 'react-icons/ci';
import { FaUsers } from "react-icons/fa";
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import avtar1 from '../images/avtar1.png'
const Footer = () => {
  // Data for the Pie Chart (Project Overview)
  const pieData = [
    { name: 'In Progress', value: 22 },
    { name: 'Completed', value: 10 },
    { name: 'Not Started', value: 5 },
  ]
  const COLORS = ['#FF6384', '#36A2EB', '#FFCE56']

  return (
    <div className="h-[375px] w-full bg-gray-100 flex gap-[10px]">
      {/* First Container */}
      <div className="h-[375px] w-[540px]  rounded-[15px] ml-[30px] flex flex-col bg-white gap-4 p-4">
        {/* Header */}
        <div className="flex justify-between items-center px-[20px] py-[10px]">
          <div>Project Summary</div>
          <div className='text-orange-400'>
            <FaBars />
          </div>
        </div>
        {/* First Card: Contains both Todo App entries */}
        <div className="border rounded-[15px] flex flex-col gap-[10px] px-[10px] py-[10px]">
          {/* First Todo App Entry */}
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-[5px]">
             <div className="text-orange-400"><FaRegUserCircle /></div> 
              <div className="flex flex-col">
                <span>Todo App</span>
                <span>19 members</span>
              </div>
            </div>
            <div>
              <MdKeyboardArrowRight />
            </div>
          </div>
          {/* Second Todo App Entry */}
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-[5px]">
            <div className="text-orange-400"><FaRegUserCircle /></div> 
              <div className="flex flex-col">
                <span>Homies SAAS Application</span>
                <span>24 members</span>
              </div>
            </div>
            <div>
              <MdKeyboardArrowRight />
            </div>
          </div>
        </div>
        {/* Second Card: Reserved for additional data */}
        <div className="border rounded-[15px] flex flex-col gap-[10px] px-[10px] py-[10px]">
          {/* First Entry */}
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-[5px]">
            <div className="text-orange-400"><FaRegUserCircle /></div> 
              <div className="flex flex-col">
                <span>In Progress</span>
                <span>22 project</span>
              </div>
            </div>
            <div>
              <MdKeyboardArrowRight />
            </div>
          </div>
          {/* Second Entry */}
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-[5px]">
            <div className="text-orange-400"><FaRegUserCircle /></div> 
              <div className="flex flex-col">
                <span>Completed</span>
                <span>10 project</span>
              </div>
            </div>
            <div>
              <MdKeyboardArrowRight />
            </div>
          </div>
        </div>
      </div>

      {/* Second Container: Pie Chart for Project Overview */}
      <div className="h-[375px] w-[540px]  rounded-[15px] flex justify-center items-center bg-white p-4">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={pieData}
              cx="50%"
              cy="50%"
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
              label
            >
              {pieData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend verticalAlign="bottom" height={36} />
          </PieChart>
        </ResponsiveContainer>
      </div>

      {/* Third Container */}
      <div className="h-[375px] w-[540px]  rounded-[15px]  flex flex-col  bg-white">
           <div className="flex justify-between px-[30px] items-center mt-[20px]">
                 <div className="div">Daily Task</div>
                 <div className="flex gap-[10px] justify-center items-center">Today <IoIosArrowDown /></div>
           </div>
          <div className="flex  flex-col justify-center items-center gap-[10px] mt-[10px]">
          <div className="h-[150px] w-[490px] border rounded-[15px] flex  flex-col  px-[20px] ">
               <div className="mt-[10px]">Tiddo Mobile App Web Design</div>
               <div className="text-[12px] text-gray-500 pt-[10px]">We have to design a dashboard for <br></br> DevignEdge Design Agency.</div>

               <div className="pt-[15px] flex justify-between">
                 <div className="flex items-center gap-[5px] text-[13px]"><div className="text-orange-400 "><CiClock1 /></div>Updated 2hr ago</div>
                 {/* <div className="text-orange-400"><FaUsers /></div> */}
                 <div className="flex items-center">
  <div className="flex">
    <img src={avtar1} alt="Avatar" className="h-8 w-8 rounded-full border-2 border-white" />
    <img src={avtar1} alt="Avatar 2" className="h-8 w-8 rounded-full border-2 border-white -ml-3" />
  </div>
  <div className=" h-8 w-8  -ml-2 bg-gray-200 text-gray-700 text-xs font-semibold px-2 py-2 rounded-full">
    +2
  </div>
</div>

          </div>
          
          </div>

          

{/* 
          <div className="h-[150px] w-[490px] border rounded-[15px] text-[5px] "></div> */}
          <div className="h-[150px] w-[490px] border rounded-[15px] flex  flex-col  px-[20px] ">
               <div className="mt-[10px]">Scrum Call Discussion</div>
               <div className="text-[12px] text-gray-500 pt-[10px]">We have to design a dashboard for <br></br> DevignEdge Design Agency.</div>

               <div className="pt-[15px] flex justify-between">
                 <div className="flex items-center gap-[5px] text-[13px]"><div className="text-orange-400 "><CiClock1 /></div>Updated 5hr ago</div>
                 {/* <div className="text-orange-400"><FaUsers /></div> */}

                 <div className="flex items-center">
  <div className="flex">
    <img src={avtar1} alt="Avatar" className="h-8 w-8 rounded-full border-2 border-white" />
    <img src={avtar1} alt="Avatar 2" className="h-8 w-8 rounded-full border-2 border-white -ml-3" />
  </div>
  <div className=" h-8 w-8  -ml-2 bg-gray-200 text-gray-700 text-xs font-semibold px-2 py-2 rounded-full">
    +2
  </div>
</div>

          </div>
          
          </div>

          </div>

      </div>
    </div>
  )
}

export default Footer

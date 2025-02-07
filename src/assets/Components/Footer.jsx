import React from 'react'
import { FaBars, FaRegUserCircle } from 'react-icons/fa'
import { MdKeyboardArrowRight } from 'react-icons/md'
import { IoIosArrowDown } from "react-icons/io";
import { CiClock1 } from 'react-icons/ci';
import { FaUsers } from "react-icons/fa";
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import avtar1 from '../images/avtar1.png'

const Footer = () => {
  const pieData = [
    { name: 'In Progress', value: 22 },
    { name: 'Completed', value: 10 },
    { name: 'Not Started', value: 5 },
  ]
  const COLORS = ['#FF6384', '#36A2EB', '#FFCE56']

  return (
    <div className="w-full bg-slate-100 flex flex-wrap gap-1 pt-6 px-4 md:px-0">
      {/* First Container */}
      <div className="h-[375px] w-full md:w-[400px] xl:w-[470px] rounded-[15px] px-4 md:px-0 md:ml-[70px] lg:ml-[30px] flex flex-col bg-white gap-4 p-4 pt-6 md:pt-0">
        <div className="flex justify-between items-center px-4 py-2">
          <div className="text-sm md:text-lg font-medium">Project Summary</div>
          <div className="text-orange-400 text-lg md:text-xl">
            <FaBars />
          </div>
        </div>

        {/* First Card */}
        <div className="border rounded-[15px] flex flex-col gap-4 px-4 py-4">
          {/* Todo App Entries */}
          {['Todo App', 'Homies SAAS Application'].map((app, index) => (
            <div key={index} className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <div className="text-orange-400 text-lg"><FaRegUserCircle /></div>
                <div className="flex flex-col">
                  <span className="text-sm md:text-base font-medium">{app}</span>
                  <span className="text-xs md:text-sm text-gray-600">{index === 0 ? '19 members' : '24 members'}</span>
                </div>
              </div>
              <div><MdKeyboardArrowRight className="text-lg md:text-xl" /></div>
            </div>
          ))}
        </div>

        {/* Second Card */}
        <div className="border rounded-[15px] flex flex-col gap-4 px-4 py-4 mt-2 md:mt-0">
          {['In Progress', 'Completed'].map((status, index) => (
            <div key={index} className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <div className="text-orange-400 text-lg"><FaRegUserCircle /></div>
                <div className="flex flex-col">
                  <span className="text-sm md:text-base font-medium">{status}</span>
                  <span className="text-xs md:text-sm text-gray-600">{status === 'In Progress' ? '22 projects' : '10 projects'}</span>
                </div>
              </div>
              <div><MdKeyboardArrowRight className="text-lg md:text-xl" /></div>
            </div>
          ))}
        </div>
      </div>

      {/* Second Container: Pie Chart */}
      <div className="h-[375px] w-full md:w-[400px] xl:w-[470px] rounded-[15px] flex justify-center items-center bg-white px-6 mt-4 md:mt-0 md:ml-[70px] lg:ml-[30px]">
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

      {/* Third Container: Daily Tasks */}
      <div className="h-[375px] w-full md:w-[510px] lg:mx-[30px] xl:mx-0  xl:w-[510px] rounded-[15px] flex flex-col bg-white mt-4 md:mt-0 md:ml-[70px] lg:ml-[30px]">
        <div className="flex justify-between px-8 items-center mt-6">
          <div className="text-sm md:text-lg font-medium">Daily Task</div>
          <div className="flex gap-3 justify-center items-center text-xs md:text-sm">
            Today <IoIosArrowDown />
          </div>
        </div>
        <div className="flex flex-col justify-center items-center gap-4 mt-4">
          {['Tiddo Mobile App Web Design', 'Scrum Call Discussion'].map((task, index) => (
            <div key={index} className="h-[150px] w-full md:w-[480px] xl:w-[480px] border rounded-[15px] flex flex-col px-5">
              <div className="mt-4 text-sm md:text-base font-medium">{task}</div>
              <div className="text-xs text-gray-500 pt-3">
                We have to design a dashboard for DevignEdge Design Agency.
              </div>
              <div className="pt-4 flex justify-between items-center">
                <div className="flex items-center gap-2 text-xs md:text-sm">
                  <div className="text-orange-400"><CiClock1 /></div>
                  Updated {index === 0 ? '2hr' : '5hr'} ago
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex">
                    <img src={avtar1} alt="Avatar" className="h-8 w-8 rounded-full border-2 border-white" />
                    <img src={avtar1} alt="Avatar 2" className="h-8 w-8 rounded-full border-2 border-white -ml-3" />
                  </div>
                  <div className="h-8 w-8 -ml-2 bg-gray-200 text-gray-700 text-xs font-semibold px-2 py-2 rounded-full">
                    +2
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Footer

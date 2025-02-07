import React, { useState } from "react";
import { PieChart, Pie, Tooltip, Cell, BarChart, Bar, XAxis, YAxis, Legend, ResponsiveContainer } from "recharts";

const Chart = () => {
  // Doughnut Chart (Pie Chart) Data
  const pieData = [
    { name: "Pending Project", students: 20 },
    { name: "Ongoing Projects", students: 30 },
    { name: "Done Project", students: 40 },
    { name: "New Project", students: 10 },
  ];

  const pieColors = ["#FF5733", "#33FF57", "#337BFF", "#FFC133"];

  // Bar Chart Data for Different Timeframes
  const barDataSets = {
    "12 Months": [
      { name: "Jan", WorkingHours: 200, Projects: 5 },
      { name: "Feb", WorkingHours: 220, Projects: 7 },
      { name: "Mar", WorkingHours: 240, Projects: 8 },
      { name: "Apr", WorkingHours: 250, Projects: 10 },
      { name: "May", WorkingHours: 230, Projects: 9 },
      { name: "Jun", WorkingHours: 270, Projects: 12 },
      { name: "Jul", WorkingHours: 260, Projects: 11 },
      { name: "Aug", WorkingHours: 280, Projects: 13 },
      { name: "Sep", WorkingHours: 300, Projects: 14 },
      { name: "Oct", WorkingHours: 310, Projects: 15 },
      { name: "Nov", WorkingHours: 320, Projects: 16 },
      { name: "Dec", WorkingHours: 330, Projects: 17 },
    ],
    "30 Days": [
      { name: "Week 1", WorkingHours: 50, Projects: 3 },
      { name: "Week 2", WorkingHours: 55, Projects: 4 },
      { name: "Week 3", WorkingHours: 60, Projects: 5 },
      { name: "Week 4", WorkingHours: 65, Projects: 6 },
    ],
    "7 Days": [
      { name: "Mon", WorkingHours: 10, Projects: 2 },
      { name: "Tue", WorkingHours: 12, Projects: 3 },
      { name: "Wed", WorkingHours: 14, Projects: 4 },
      { name: "Thu", WorkingHours: 16, Projects: 5 },
      { name: "Fri", WorkingHours: 18, Projects: 6 },
      { name: "Sat", WorkingHours: 20, Projects: 7 },
      { name: "Sun", WorkingHours: 22, Projects: 8 },
    ],
    "24 Hours": [
      { name: "00-06", WorkingHours: 5, Projects: 1 },
      { name: "06-12", WorkingHours: 10, Projects: 2 },
      { name: "12-18", WorkingHours: 15, Projects: 3 },
      { name: "18-24", WorkingHours: 20, Projects: 4 },
    ],
  };

  // State to Track Active Data
  const [selectedTimeFrame, setSelectedTimeFrame] = useState("12 Months");

  return (
    <div className="mt-[20px] px-4 md:px-6 w-full flex flex-col md:flex-row justify-between gap-3 md:gap-1 lg:gap-4 bg-gray-100 ">
      {/* Doughnut Chart (Pie Chart) */}
      <div className="h-auto md:h-[375px] w-full md:w-[480px] rounded-[15px] flex flex-col justify-center items-center bg-white p-4 md:mx-[40px] lg:mx-0">
        <h1 className="text-green-600 text-lg font-bold">Monthly Target</h1>

        <PieChart width={250} height={250}>
          <Tooltip />
          <Pie
            data={pieData}
            dataKey="students"
            outerRadius={90}
            innerRadius={50}
            labelLine={false}
            label={({ percent }) => `${(percent * 100).toFixed(0)}%`}
          >
            {pieData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={pieColors[index % pieColors.length]} />
            ))}
          </Pie>
        </PieChart>

        {/* Legend */}
        <div className="pb-4 flex flex-wrap justify-center gap-2">
          {pieData.map((entry, index) => (
            <div key={index} className="flex items-center space-x-2">
              <div
                className="w-4 h-4 rounded-full"
                style={{ backgroundColor: pieColors[index % pieColors.length] }}
              ></div>
              <span className="text-sm">{entry.name}: {entry.students}%</span>
            </div>
          ))}
        </div>
      </div>

      {/* Bar Chart with Buttons */}
      <div className="h-auto md:h-[375px] w-full rounded-[15px] flex flex-col bg-white p-4">
        {/* Buttons to Change Time Frame */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-4">
          {Object.keys(barDataSets).map((timeFrame) => (
            <button
              key={timeFrame}
              className={`px-3 py-1.5 md:px-4 md:py-2 rounded-md text-sm font-semibold transition ${
                selectedTimeFrame === timeFrame
                  ? "bg-blue-500 text-white"
                  : "bg-gray-300 text-black"
              }`}
              onClick={() => setSelectedTimeFrame(timeFrame)}
            >
              {timeFrame}
            </button>
          ))}
        </div>

        {/* Bar Chart */}
        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={barDataSets[selectedTimeFrame]} margin={{ top: 20, right: 30, left: 10, bottom: 20 }}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="WorkingHours" fill="#337BFF" barSize={40} radius={[5, 5, 0, 0]} />
            <Bar dataKey="Projects" fill="#FFC133" barSize={40} radius={[5, 5, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Chart;

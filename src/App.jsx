import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Outlet } from "react-router-dom";
import Sidebar from "./assets/Components/Sidebar";
import StripHeader from "./assets/Components/StripHeader";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="h-screen w-full flex">
      {/* Sidebar (Hidden on small screens) */}
      <div
        className={`fixed top-0 left-0 h-full bg-gray-800 z-50 transition-transform duration-300 ease-in-out ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } sm:relative sm:translate-x-0 sm:w-[15%]  sm:flex`}
      >
        <Sidebar />
      </div>

      {/* Backdrop for mobile */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0  bg-opacity-50 sm:hidden z-40"
          onClick={toggleSidebar}
        ></div>
      )}

      {/* Main Content */}
      <div className="w-full sm:w-[85%] max-h-screen overflow-y-scroll z-10">
        <StripHeader toggleSidebar={toggleSidebar} />
        <Outlet />
      </div>
    </div>
  );
}

export default App;
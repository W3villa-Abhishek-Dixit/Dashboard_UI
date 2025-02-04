import HeroSrction from "./assets/Components/HeroSrction"
import Sidebar from "./assets/Components/Sidebar"
import StripHeader from "./assets/Components/StripHeader"
import Chart from "./assets/Components/Chart"
import Footer from "./assets/Components/Footer"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Outlet } from "react-router-dom"
function App() {
  

  return (
    <>
      <div className="h-screen w-full flex">
        
        <div className=" w-[15%] border-2">
            <Sidebar/>     
        </div>
        <div className=" w-[85%] max-h-screen overflow-y-scroll">
          <Outlet/>
        </div>
      </div>
      
    </>
  )
}

export default App
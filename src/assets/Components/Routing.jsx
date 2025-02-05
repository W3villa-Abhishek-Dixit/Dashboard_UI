import React from 'react'
import { Routes, Route, BrowserRouter } from "react-router-dom";
import App from '../../App';
import Overview from './Overview';
import Home from './Home';
import Calander from './Calander';
import Table from './Table';
function Routing() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<App />}>
                    <Route path='/' element={<Home />}></Route>

                    <Route path='/overf' element={<Overview />}></Route>
                    <Route path='/calander' element={<Calander />}></Route>
                    <Route path='/table' element={<Table />}></Route>
                    
                </Route>
           
            </Routes>
        </BrowserRouter>
    )
}

export default Routing;
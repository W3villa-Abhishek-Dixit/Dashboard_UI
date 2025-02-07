import React from 'react'
import StripHeader from './StripHeader'
import HeroSrction from './HeroSrction'
import Chart from './Chart'
import Footer from './Footer'


function Overview() {
    return (
        <div className=" min-h-full w-full bg-slate-100 ">
            {/* <StripHeader /> */}
           
            <HeroSrction />
         
             <Chart /> 

            <Footer />  

        </div>
    )
}

export default Overview
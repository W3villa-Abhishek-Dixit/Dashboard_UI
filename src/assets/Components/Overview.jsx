import React from 'react'
import StripHeader from './StripHeader'
import HeroSrction from './HeroSrction'
import Chart from './Chart'
import Footer from './Footer'


function Overview() {
    return (
        <div className=" max-h-screen  w-full  ">
            <StripHeader />
           
            <HeroSrction />
         
            <Chart />

            <Footer />

        </div>
    )
}

export default Overview
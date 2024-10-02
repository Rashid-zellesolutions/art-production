import React from 'react'
import './Home.css';
import Navbar from '../../GlobalComponents/Navbar/Navbar';
import PerformanceCount from '../../GlobalComponents/PerformanceCount/PerformanceCount';
import OurServices from '../../Components/OurServices/OurServices';
import Hero from '../../GlobalComponents/Hero/Hero';

const Home = () => {
  return (
    <div>
        {/* <Navbar /> */}
        <Hero />
        <PerformanceCount />
        <OurServices />
    </div>
  )
}

export default Home

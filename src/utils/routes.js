import React from 'react'
import {Routes, Route } from 'react-router-dom'
import Home from '../Pages/Home/Home'
import Portfolio from '../Pages/Portfolio/Portfolio'
import Services from '../Pages/Services/Services'
import About from '../Pages/About/About'

const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about-us' element={<About />} />
        <Route path='/our-projects' element={<Portfolio />} />
        <Route path='/services' element={<Services />} />
    </Routes>
  )
}

export default AllRoutes

import React from 'react'
import './PerformanceCount.css'

const PerformanceCount = () => {
    const performanceCount = [
        {count: '30772+', title: 'WorkHours'},
        {count: '234+', title: 'Projects'},
        {count: '132+', title: 'Clients'},
        {count: '7+', title: 'Partners'},
    ]
  return (
    <div className='performance-count-main-section'>
        <div className='performance-count-inner'>
            {performanceCount.map((items, index) => (
                <div key={index} className='performance-count-containt'>
                    <h3>{items.count}</h3>
                    <p>{items.title}</p>
                </div>
            ))}
        </div>
    </div>
  )
}

export default PerformanceCount

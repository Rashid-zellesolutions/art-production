import React, { useState, useRef, useEffect } from 'react'
import './Stories.css'
import alJazeeraLogo from '../../Assets/logos/aljazeera.png';
import arrowLeft from '../../Assets/icons/arrow-left-white.png';
import arrowRight from '../../Assets/icons/arrow-white-right.png';

const Stories = () => {

    const storiesData = [
        {logo: alJazeeraLogo, post: `The teams that worked on our projects on location and in 
                premise have been very professional and flexible and we always get exactly what 
                we are looking for, if not more`,
            name: 'Abdo Madkhana', position: 'MANAGER AL JAZEERA'
        },
        {logo: alJazeeraLogo, post: `The teams that worked on our projects on location and in 
                premise have been very professional and flexible and we always get exactly what 
                we are looking for, if not more`,
            name: 'Abdo Madkhana', position: 'MANAGER AL JAZEERA'
        },
        {logo: alJazeeraLogo, post: `The teams that worked on our projects on location and in 
                premise have been very professional and flexible and we always get exactly what 
                we are looking for, if not more`,
            name: 'Abdo Madkhana', position: 'MANAGER AL JAZEERA'
        },

    ]

    const [currentIndex, setCurrentIndex] = useState(0);
    const slideNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex >= storiesData.length - 1 ? 0 : prevIndex + 1));
    };
    
    const slidePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex <= 0 ? storiesData.length - 1 : prevIndex - 1));
    };

    const translateX = `translateX(-${(currentIndex - 1) * 220}px)`;

  return (
    <div className='stories-main-container'>
      <div className='stories-heading-section'>
        <h3>Stories that Make <span>Us Smile!</span></h3>
      </div>
      <div className='stories-cards-container'>
    <button className='stories-arrow stories-arrow-left' onClick={slidePrev}>
        <img src={arrowLeft} alt='arrow-left' />
    </button>
    <div className='stories-cards-wrapper' style={{ transform: translateX }}>
        {storiesData.map((item, index) => (
            <div key={index} className={`stories-card ${currentIndex === index ? 'active' : ''}`}>
                <div className='stories-card-content'>
                    <img src={item.logo} alt='logo' />
                    <p>{item.post}</p>
                    <div className='stories-card-author-detail'>
                        <h3>{item.name}</h3>
                        <p>{item.position}</p>
                    </div>
                </div>
            </div>
        ))}
    </div>
    <button className='stories-arrow stories-arrow-right' onClick={slideNext}>
        <img src={arrowRight} alt='arrow-right' />
    </button>
</div>

    </div>
  )
}

export default Stories

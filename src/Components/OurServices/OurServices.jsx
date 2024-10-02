import React, { useState } from 'react';
import './OurServices.css';
import videoProductionImage from '../../Assets/services-images/portrait-fitness-influencer.png'
import documentriesImage from '../../Assets/services-images/private-investigator-searching-files-based-case-names-archive_482257-83351 1.png'
import creativeInterviewImage from '../../Assets/services-images/high-angle-man-with-laptop-podcast.png'
import commercialImage from '../../Assets/services-images/man-woman-looking-clipboard.png'
import eventManagmentImage from '../../Assets/services-images/man-making-music-bedroom-front-view.png'
import shortFilmImage from '../../Assets/services-images/man-filming-with-professional-camera.png'
import markeetingImage from '../../Assets/services-images/tech-vlogger.png'
import Button from '../../ControlledComponents/PrimeryButton/PrimeryButton';

const OurServices = () => {
    const [currentIndex, setCurrentIndex] = useState(null)
    const handleMouseOver = (index) => {setCurrentIndex(index)}
    const handleMouseLeave = () => {setCurrentIndex(null)}
  return (
    <div className='our-services-main-section'>
        <h3>Our <span>Services</span></h3>
        <div className='services-show-case-main-container'>
            <div 
                className='grid-col video-production'  
                onMouseEnter={() => handleMouseOver(1)} 
                onMouseLeave={handleMouseLeave}
            >
                <img src={videoProductionImage} alt='video production' />
                <div className={`col-overlay ${currentIndex === 1 ? 'show-overlay' : ''}`}>
                    <h3>Video Production</h3>
                </div>
            </div>
            <div 
                className='grid-col documentaries'
                onMouseEnter={() => handleMouseOver(2)} 
                onMouseLeave={handleMouseLeave}
            >
                <img src={documentriesImage} alt='Documantries' />
                <div className={`col-overlay ${currentIndex === 2 ? 'show-overlay' : ''}`}>
                    <h3>Documantries</h3>
                </div>
            </div>
            <div 
                className='grid-col creative-interview'
                onMouseEnter={() => handleMouseOver(3)} 
                onMouseLeave={handleMouseLeave}
            >
                <img src={creativeInterviewImage} alt='Creative Interviews' />
                <div className={`col-overlay ${currentIndex === 3 ? 'show-overlay' : ''}`}>
                    <h3>Creative Interviews</h3>
                </div>
            </div>
            <div 
                className='grid-col commercial'
                onMouseEnter={() => handleMouseOver(4)} 
                onMouseLeave={handleMouseLeave}
            >
                <img src={commercialImage} alt='Commercial & Advertisiment' />
                <div className={`col-overlay ${currentIndex === 4 ? 'show-overlay' : ''}`}>
                    <h3>Commercial & Advertisiment</h3>
                </div>
            </div>
            <div 
                className='grid-col event-managment'
                onMouseEnter={() => handleMouseOver(5)} 
                onMouseLeave={handleMouseLeave}
            >
                <img src={eventManagmentImage} alt='Event Managment' />
                <div className={`col-overlay ${currentIndex === 5 ? 'show-overlay' : ''}`}>
                    <h3>Event Managment</h3>
                </div>
            </div>
            <div 
                className='grid-col short-films'
                onMouseEnter={() => handleMouseOver(6)} 
                onMouseLeave={handleMouseLeave}
            >
                <img src={shortFilmImage} alt='Short Films' />
                <div className={`col-overlay ${currentIndex === 6 ? 'show-overlay' : ''}`}>
                    <h3>Short Films</h3>
                </div>
            </div>
            <div 
                className='grid-col markeeting'
                onMouseEnter={() => handleMouseOver(7)} 
                onMouseLeave={handleMouseLeave}
            >
                <img src={markeetingImage} alt='Markeeting' />
                <div className={`col-overlay ${currentIndex === 7 ? 'show-overlay' : ''}`}>
                    <h3>Markeeting</h3>
                </div>
            </div>
        </div>
        <div className='see-all-projects-section'>
            <Button text={'See All Projects'} width={'180px'} height={'55px'} />
        </div>
    </div>
  )
}

export default OurServices

import React from 'react'
import './Hero.css';
import Navbar from '../Navbar/Navbar';

const Hero = () => {
  return (
    <div className='hero-main-section'>
        <iframe
            className="hero-video"
            src="https://player.vimeo.com/video/767309533?api=1&background=1&autoplay=1&loop=1"
            frameBorder="0"
            allow="autoplay; fullscreen"
            allowFullScreen
            title="Vimeo Video"
        ></iframe>
        <div className="hero-overlay">
            <Navbar />
            <div className='hero-overlay-text'>
                <p>Welcome To Art Production</p>
                <h1>Innovating Art, Inspiring Creativity</h1>
            </div>
        </div>
    </div>
  )
}

export default Hero

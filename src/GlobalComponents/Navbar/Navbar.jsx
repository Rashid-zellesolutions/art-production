import React, { useState } from 'react'
import './Navbar.css';
import logo from '../../Assets/logos/logo.png'
import Button from '../../ControlledComponents/PrimeryButton/PrimeryButton';


const Navbar = () => {
    const [isActive, setIsActive] = useState(0)
    const handleNavActive = (index) => {setIsActive(index)}
    const navLinks = [
        {name: 'Home', link: '/'},
        {name: 'About', link: '#'},
        {name: 'Portfolio', link: '/our-projects'},
        {name: 'Services', link: '#'},
    ]
  return (
    <div className='navbar-main-container'>
        <div className='navbar-inner-container'>
            <div className='navbar-logo-section'>
                <img src={logo} alt='logo' />
            </div>
            <div className='navbar-links-section'>
                {navLinks.map((items, index) => (
                    <a 
                        href={items.link} 
                        className={`navbar-link-anchor ${isActive === index ? 'navbar-link-active-anchor' : ''}`} 
                        onClick={() => handleNavActive(index)} 
                    >
                        {items.name}
                    </a>
                ))}
            </div>
            <div className='navbar-contact-btn-section'>
                <Button text={'Contact Us'} width={'173px'} height={'55px'} />
            </div>
        </div>
    </div>
  )
}

export default Navbar

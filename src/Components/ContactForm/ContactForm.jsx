import React from 'react'
import './ContactForm.css';
import InputField from '../../ControlledComponents/InputField/InputField'
import PrimeryButton from '../../ControlledComponents/PrimeryButton/PrimeryButton';
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaVimeoV } from "react-icons/fa";

const ContactForm = () => {
    const socialIcons = [
        {link: '#', icon: <FaFacebookF size={20} />}, 
        {link: '#', icon: <FaInstagram size={20} />}, 
        {link: '#', icon: <FaTwitter size={20} />}, 
        {link: '#', icon: <FaLinkedinIn size={20} />}, 
        {link: '#', icon: <FaYoutube size={20} />}, 
        {link: '#', icon: <FaVimeoV size={20} />} 
    ]
  return (
    <div className='contact-us-main-div'>
        <div className='contact-left-section'>
            <h3 className='contact-heading'>Let's Create and <span> Collaborate! </span></h3>
            <p className='contact-desc'>
                Explore exciting opportunities for video production, documentaries, 
                commercials, and digital media projects. We're always open to innovative 
                collaborations and commercial ventures.
            </p>
                <h3 className='contact-follow'>Connect with us on <span>Social Media</span></h3>
            <div className='contact-social-icons'>
                {socialIcons.map((items, index) => (
                    <a href={items.link}>{items.icon}</a>
                ))}
            </div>
        </div>
        <div className='contact-right-section'>
            <InputField 
                type={'text'} 
                placeholder={'Your Name'}
                width={'425px'}
                height={'50px'}
                textAlign={'start'}
                padding={'12px 23px 3px 23px'}
                fontSize={'18px'}
                lineHeight={'27px'}
                fontWeight={'600'}
                color={'#fff'}
                borderRadius={'10px'}
            />
            <InputField 
                type={'text'} 
                placeholder={'Your Email'}
                width={'425px'}
                height={'50px'}
                textAlign={'start'}
                padding={'12px 23px 3px 23px'}
                fontSize={'18px'}
                lineHeight={'27px'}
                fontWeight={'600'}
                color={'#fff'}
                borderRadius={'10px'}
            />
            <InputField 
                type={'text'} 
                placeholder={'Your Phone'}
                width={'425px'}
                height={'50px'}
                textAlign={'start'}
                padding={'12px 23px 3px 23px'}
                fontSize={'18px'}
                lineHeight={'27px'}
                fontWeight={'600'}
                color={'#fff'}
                borderRadius={'10px'}
            />
            <textarea rows={3} placeholder='Message' className='text-message' />
            <PrimeryButton 
                text={'SUBMIT'} 
                width={'182px'} 
                height={'50px'} 
                padding={'2px 10px'}
                fontSize={'17px'}
                lineHeight={'25px'}
                fontWeight={'600'}
                color={'#fff'}
            />
        </div>
    </div>
  )
}

export default ContactForm

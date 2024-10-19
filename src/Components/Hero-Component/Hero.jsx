import React, { useState } from 'react'
import './Hero.css'
import profile_img from '../../assets/5558.jpg'
import cv from '../../assets/(CHE) neelam-senthil.pdf'

const Hero = () => {
  

  return (
    
    <div className='hero-container' id='about'>
        <img src={profile_img} alt="" />
        <h1> Hi,I am <span>Neelam Senthil </span></h1>
        <h2>I am a <span>Front End Developer.</span></h2>
        <p>A React developer specializes in building dynamic and interactive user interfaces for web applications using the React.js library. They leverage components, state management, and other React features to create responsive and efficient frontends.</p>
        <div className="hero-resume">
          <a href={cv}>
            <button>Check Resume</button>
          </a>
        </div>
        

    </div>
  
  )

}

export default Hero
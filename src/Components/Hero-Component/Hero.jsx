import React, { useState } from 'react'
import './Hero.css'
import profile_img from '../../assets/5558.jpg'
import cv from '../../assets/Resume.pdf'

const Hero = () => {
  

  return (
    
    <div className='hero-container' id='about'>
        <img src={profile_img} alt="" />
        <h1> Hi,I am <span>Neelam Senthil </span></h1>
        <h2>I am a <span>MERN Stack Developer.</span></h2>
        <p>
        Enthusiastic and detail-oriented MERN Stack Developer with a strong foundation in MongoDB, Express.js, React.js, and Node.js. Passionate about building dynamic and responsive web applications. Adept at problem-solving and eager to learn and grow in a collaborative environment. Excited to apply knowledge to real-world projects and contribute effectively to development teams.
        </p>
        <div className="hero-resume">
          <a href={cv}>
            <button>Check Resume</button>
          </a>
        </div>
        

    </div>
  
  )

}

export default Hero
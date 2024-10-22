import React from 'react'
import './Footer.css'
import logo from '../../assets/neelam.png'
import linkedin from '../../assets/linkedin (1).png'
import github from '../../assets/github (2).png'
import gmail from '../../assets/gmail.png'



const Footer = () => {
  const year = new Date().getFullYear()
  return (
    <div className='footer-container'>
      <div className="footer-top">
        <div className="footer-top-left">
          <img src={logo} alt="" />
          <p>Iam a Frontend developer specializes in building dynamic and interactive user interfaces for web applications using the React.js library.</p>
        </div>
        <div className="footer-top-right">
          <a href="https://www.linkedin.com/in/neelam-senthil07">
            <img src={linkedin} alt="" />
          </a>

          <a href="https://github.com/neelamsenthil">
            <img src={github} alt="" />
          </a>

        </div>

      </div>
      <hr />

      <div className="footer-bottom">
        <p>&copy; {year} Neelam Senthil. All rights reserved.</p>

      </div>
    </div>
  )
}

export default Footer
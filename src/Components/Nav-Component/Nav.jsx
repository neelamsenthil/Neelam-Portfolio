import React, { useState } from 'react'
import './Nav.css'
import logo from '../../assets/portfolio-png-png-image-186415.png'
import underline from '../../assets/nav_underline.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import menu_open from '../../assets/menu_open.svg'
import menu_close from '../../assets/menu_close.svg'
import { useRef } from 'react'



const Nav = () => {
  const [home,setHome] = useState("home")
  const menuRef = useRef();

  const openMenu = ()=>{
    menuRef.current.style.right="0";
  }

  const closeMenu = ()=>{
    menuRef.current.style.right="-350px";
  }

  return (
    <div className='nav-container'>
        <img src={logo} alt="" />
        <img src={menu_open} onClick={openMenu} alt=""  className='menu-open' />
            <ul ref={menuRef} className="nav-menu">
              <img src={menu_close} onClick={closeMenu} alt="" className='menu-close' />
                <li> <AnchorLink className="anchor-link"  href='#home' > <p onClick={()=>{setHome("home")}}>Home</p> </AnchorLink>{home === "home" ? <img className='underline' src={underline}/> : <></>} </li>
                <li> <AnchorLink className="anchor-link"  offset={50}  href='#about' ><p onClick={()=>{setHome("about")}}>About Me</p> </AnchorLink>{home === "about" ? <img className='underline' src={underline}/> : <></>} </li>
                <li> <AnchorLink className="anchor-link"  offset={50}  href='#skills'><p onClick={()=>{setHome("skills")}}>Skills</p> </AnchorLink>{home === "skills" ? <img className='underline' src={underline}/> : <></>} </li>
                <li> <AnchorLink className="anchor-link"  offset={50}  href='#projects'><p onClick={()=>{setHome("projects")}}>Projucts</p> </AnchorLink>{home === "projects" ? <img className='underline' src={underline}/> : <></>} </li>
                <li> <AnchorLink className="anchor-link"  offset={50}  href='#contact'><p onClick={()=>{setHome("contact")}}>Contact</p> </AnchorLink>{home === "contact" ? <img className='underline' src={underline}/> : <></>} </li>

            </ul>


    </div>
  )
}

export default Nav
import React from 'react'
import './Project.css'
import { items } from '../../Projects'
import theme_pattern from '../../assets/theme_pattern.svg'


const Project = () => {
  return (
    <div className='project-container' id='projects'>
      <div className="project-heading">
        <h1>Projects</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <p className='para'>Here are some of my projects.</p>

        <div className='project'>
          {items.map((item, index) => {
            return <div className="project-content" key={index}>
              <img src={item.image} alt="" />
              <ul className='using'>
                <li>{item.using}</li>
                <li>{item.using1}</li>

              </ul>
              <h2>{item.name}</h2>
              <div className="projuct-btn">
                <a href={item.code}><button>View Code</button></a>

              </div>

            </div>

          })}

        </div>




    </div>
  )
}

export default Project
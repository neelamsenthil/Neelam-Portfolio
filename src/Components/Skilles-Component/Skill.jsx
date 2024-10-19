import React from 'react'
import './Skill.css'
import { data } from '../../Data.js'
import { others } from '../../Data.js'
import theme_pattern from '../../assets/theme_pattern.svg'


const Skill = () => {
    return (
        <div className='skill-store' id='skills'>
            <div className="title">
                <h1>Skills</h1>
                <img src={theme_pattern} alt="" />
            </div>
            <p className='para'>Here are some of my skills on which i have learnt.</p>



            <div className="skill-container">
                <div className="left">
                    <h2 className='heading'>Frontend</h2>
                    <div className="skill-content">
                    {data .map((item, index) => {
                        return <div className="skill" key={index}>
                            <img src={item.image} alt="" />
                            <p>{item.name}</p>


                        </div>
                    })}


                    </div>
            

                </div>




                <div className="right">
                    <h2 className='heading'>Others</h2>
                    <div className="skill-content">
                    {others .map((item, index) => {
                        return <div className="skill" key={index}>
                            <img src={item.image} alt="" />
                            <p>{item.name}</p>


                        </div>
                    })}

                    </div>



                </div>

            </div>
        </div>

    )
}

export default Skill
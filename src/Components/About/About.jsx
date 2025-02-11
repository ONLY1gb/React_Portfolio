import React from 'react'
import "./About.css"
import theme_pattern from "../../assets/theme_pattern.svg"
import profile_img from "../../assets/Gb_pic.png"

const About = () => {
  return (
    <div id='about' className='about'>
      <div className="about-title">
        <h1>About me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-sections">
        <div className="about-left">
            <img src={profile_img} alt="" />
        </div>
        <div className="about-right">
            <div className="about-para">
                <p>I am an experienced Frontend Developer with over a decade of professional expertise in the field. Throughout my career, I have had the privilege of collaborating with prestigious organization, contributing to their success and growth.</p>
                <p>My passion for frontend development is not only reflected in my extensive experience but also in the enthusiasm and dedication I bring to each project.</p>
            </div>

            <div className="about-skills">
                <div className="about-skill">
                    <p>HTML & CSS</p> <hr style={{width:"50%"}}/>
                </div>
                <div className="about-skill">
                    <p>JavScript</p> <hr style={{width:"70%"}}/>
                </div>
                <div className="about-skill">
                    <p>React Js</p> <hr style={{width:"80%"}}/>
                </div>
                
            </div>
        </div>
      </div>
      <div className="about-achivements">
        <div className="about-achivement">
            <h1>2+</h1>
            <p>YEARS OF EXPERIENCE</p>
        </div>
        <hr/>
        <div className="about-achivement">
            <h1>30+</h1>
            <p>PROJECTS COMPLETED</p>
        </div>
        
      </div>
    </div>
  )
}

export default About

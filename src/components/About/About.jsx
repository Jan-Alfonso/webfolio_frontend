import React from 'react'
import "../About/About.css";
import FaceMin from "../images/face-min.png";

function About() {
  return (
    <div>
      <div className="about-title">About Me</div>
      <div className="about-grid-container">
        <div className="about-grid-item">
          <img id='about-picture' className='about-grid-content' src={FaceMin} alt="about-picture" />
        </div>
        <div className="about-grid-item">
          <div className='about-grid-content'>I am a Creative Web Developer skilled in all phases of web
development. I work with HTML, CSS, Bootstrap, JavaScript,
ReactJS, MaterialUI, Laravel, PHP, and MySQL. I'm also experienced
with Adobe tools like Photoshop and Illustrator. I enjoy
collaborating with teams and am always ready to learn new
skills</div></div>
      </div>
    </div>
  )
}

export default About

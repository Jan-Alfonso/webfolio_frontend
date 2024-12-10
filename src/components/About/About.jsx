import React from 'react'
import "../About/About.css";
import FaceMin from "../images/face-min.png";

function About() {
  return (
    <div>
      <div className="about-title">ABOUT ME</div>
      <div className="about-grid-container">
        <div className="about-grid-item">
          <img className='about-grid-content' src={FaceMin} alt="about-picture" />
        </div>
        <div className="about-grid-item">
          <div className='about-grid-content'>I'm Jan Meriss Alfonso, a Full-Stack Web Developer and Graphic Designer for 4 years</div></div>
      </div>
    </div>
  )
}

export default About

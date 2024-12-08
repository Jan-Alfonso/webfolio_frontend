import React from 'react'
import "../About/About.css";
import FaceMin from "../images/face-min.png";

function About() {
  return (
    <div>
      <div className="about-grid-container">
        <div className="about-grid-item">
          <img className='about-grid-content' src={FaceMin} alt="about-picture" />
        </div>
        <div className="about-grid-item"></div>
      </div>
    </div>
  )
}

export default About

import React from 'react'
import "./Resume.css";
import displayPicture from "../images/face-min.png";

function Resume() {
  return (
    <div>
      <img className="display-picture" src={displayPicture} alt="displayPicture" />
        <div className="my-name">
          Jan Meriss Alfonso
        </div>
        <div className="title">
          Full-Stack Developer and Graphic Designer
        </div>
    </div>
  )
}

export default Resume

import React from 'react'
import "./Resume.css";
import displayPicture from "../images/face-min.png";
import ReactJsBar from '../ProgressBar/ReactJSBar';
import PythonBar from '../ProgressBar/PythonBar';
import JavaScriptBar from '../ProgressBar/JavaScriptBar';

function Resume() {
  return (
    <div className='resume-container'>
      <img className="display-picture" src={displayPicture} alt="displayPicture" />
        <div className="my-name-resume">
          Jan Meriss Alfonso
        </div>
        <div className="title">
          Full-Stack Developer and Graphic Designer
        </div>
        <div className='divider'></div>
        <div>
          <div class="grid-container">
            <div class="grid-item"><ReactJsBar/></div>
            <div class="grid-item"><PythonBar/></div>
            <div class="grid-item"><JavaScriptBar/></div>
          </div>
        </div>
        <div className='divider'></div>
    </div>
  )
}

export default Resume

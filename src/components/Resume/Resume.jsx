import React from 'react';
import './Resume.css';
import ReactJsBar from '../ProgressBar/ReactJSBar';
import PythonBar from '../ProgressBar/PythonBar';
import JavaScriptBar from '../ProgressBar/JavaScriptBar';
import SkillsBar from '../ProgressBar/SkillsBar';

function Resume() {
  return (
    <div className="resume-container">
      
      <div className="skill-container-details">
        <div className="details-block">
        <div className="details" style={{color:'#F28500'}}>Email:</div>
        <div style={{color: 'white'}}>janmerissalfonso@gmail.com</div>
        </div>
        <div className="details-block">
        <div className="details" style={{color:'#F28500'}}>Contact#:</div>
        <div style={{color: 'white'}}>+639688803231</div>
        </div>
        <div className="details-block">
        <div className="details" style={{color:'#F28500'}}>Residence:</div>
        <div style={{color: 'white'}}>Manila, Philippines</div>
        </div>
      </div>

      <div className="divider"></div>

      <div className="grid-container">
        <div className="grid-item"><ReactJsBar /></div>
        <div className="grid-item"><PythonBar /></div>
        <div className="grid-item"><JavaScriptBar /></div>
      </div>

      <div className="divider"></div>

      <div className="skill-container">
        <div className="skill-item">
          <div className="skill"></div>
          <div className="skill-progress"><SkillsBar/></div>
        </div>
      </div>

    </div>
  );
}

export default Resume;

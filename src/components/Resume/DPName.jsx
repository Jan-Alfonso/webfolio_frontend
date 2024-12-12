import React from 'react';
import './Resume.css';
import DLResume from '../images/janAlfonso_WebDev.pdf';
import displayPicture from '../images/jan_cropped.jpeg';

function DPName() {
    return (
<div className="dp-container">
        <div className="dp-name">
        <img className="display-picture" src={displayPicture} alt="displayPicture" />
        <div className="my-name-resume">Jan Meriss Alfonso</div>
        <div className="title">Full-Stack Developer and Graphic Designer</div>
        <a className="download-resume" href={DLResume} download="janAlfonso_WebDev.pdf">
        Download Resume
        </a>
        </div>
</div>

    );
}

export default DPName;
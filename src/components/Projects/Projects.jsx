import React, { useRef, useState } from "react";
import { Carousel } from 'react-responsive-carousel';
import "./Projects.css";
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Stellar from "../images/stellar-branding.png";
import Leus from "../images/leus-branding.png";
import LogoCreation from "../images/logo-creation.png";
import ShirtDesign from "../images/shirt-design.png";
import VectorArt from "../images/vector-art.png";
import EmailDesign from "../images/email-design.png";

const Projects = () => (
  <div className='carousel-container'>
  <Carousel showArrows autoPlay infiniteLoop>
    <div>
      <img src={Leus} alt="Slide 1" />
      <p className="legend">Leus</p>
    </div>
    <div>
      <img src={Stellar} alt="Slide 1" />
      <p className="legend">Stellar</p>
    </div>
    <div>
      <img src={LogoCreation} alt="Slide 2" />
      <p className="legend">Logo Creation</p>
    </div>
    <div>
      <img src={ShirtDesign} alt="Slide 2" />
      <p className="legend">Shirt Design</p>
    </div>
    <div>
      <img src={VectorArt} alt="Slide 2" />
      <p className="legend">Vector Art</p>
    </div>
    <div>
      <img src={EmailDesign} alt="Slide 2" />
      <p className="legend">Email Design</p>
    </div>
  </Carousel>
  </div>
);

export default Projects;

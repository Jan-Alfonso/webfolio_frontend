import React, { useRef, useState } from "react";
import "./Projects.css";
import Stellar from "../images/stellar-branding.png";
import Leus from "../images/leus-branding.png";
import LogoCreation from "../images/logo-creation.png";
import ShirtDesign from "../images/shirt-design.png";
import VectorArt from "../images/vector-art.png";
import EmailDesign from "../images/email-design.png";

const Projects = () => {
  const images = [
    {
      name: "Stellar Branding",
      description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!",
      image: Stellar,
    },
    {
      name: "Leus Branding",
      description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!",
      image: Leus,
    },
    {
      name: "Logo Creation",
      description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!",
      image: LogoCreation,
    },
    {
      name: "Shirt Design",
      description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!",
      image: ShirtDesign,
    },
    {
      name: "Vector Art",
      description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!",
      image: VectorArt,
    },
    {
      name: "Email Design",
      description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!",
      image: EmailDesign,
    },
  ];

  const slideRef = useRef(null);
  const [modalImage, setModalImage] = useState(null);

  const handleNext = () => {
    if (slideRef.current) {
      const firstItem = slideRef.current.firstElementChild;
      slideRef.current.appendChild(firstItem);
    }
  };

  const handlePrev = () => {
    if (slideRef.current) {
      const lastItem = slideRef.current.lastElementChild;
      slideRef.current.prepend(lastItem);
    }
  };

  const openModal = (image) => {
    setModalImage(image);
  };

  const closeModal = () => {
    setModalImage(null);
  };

  return (
    <div className="container">
      <div className="slide" ref={slideRef}>
        {images.map((image, index) => (
          <div key={index} className="item" style={{ backgroundImage: `url(${image.image})` }}>
          <div className="content">
              <div className="name">{image.name}</div>
              <div className="des">{image.description}</div>
              <button className="full-image-button" onClick={() => openModal(image.image)}>
                FULL IMAGE
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="button">
        <button className="prev" onClick={handlePrev}>
          prev
        </button>
        <button className="next" onClick={handleNext}>
          next
        </button>
      </div>

      {modalImage && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content">
            <span className="close-button" onClick={closeModal}>&times;</span>
            <img src={modalImage} alt="Full view" />
          </div>
        </div>
      )}

    </div>
  );
};

export default Projects;

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
      description: "Stellar Clothing is a small Filipino brand offering a diverse range of stylish, high-quality apparel.",
      image: Stellar,
    },
    {
      name: "Leus Branding",
      description: "Leus Beard Oil specializes in organic, hypoallergenic grooming products designed for comfort and care.",
      image: Leus,
    },
    {
      name: "Logo Creation",
      description: "Designing unique and impactful logos using Photoshop and Illustrator, tailored to reflect your brand’s identity and vision.",
      image: LogoCreation,
    },
    {
      name: "Shirt Design",
      description: "Skilled in creating custom shirt designs with a focus on aesthetics and branding, using Photoshop and Illustrator for high-quality, print-ready results.",
      image: ShirtDesign,
    },
    {
      name: "Vector Art",
      description: "Proficient in crafting detailed and scalable vector art exclusively with Illustrator, delivering high-quality, versatile designs for various digital and print applications.",
      image: VectorArt,
    },
    {
      name: "Email Design",
      description: "Experienced in designing compelling email templates using Photoshop, Illustrator, Figma, and Klaviyo, ensuring visually appealing, responsive, and effective email campaigns.",
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
          PREV
        </button>
        <button className="next" onClick={handleNext}>
          NEXT
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

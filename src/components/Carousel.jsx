// components/Carousel.jsx
import React, { useState } from "react";
import "./Carousel.scss";

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevImage = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextImage = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="carousel">
      <button
        className="carousel__arrow carousel__arrow--left"
        onClick={prevImage}
      >
        ‹
      </button>
      <img
        src={images[currentIndex]}
        alt={`Slide ${currentIndex + 1}`}
        className="carousel__image"
      />
      <button
        className="carousel__arrow carousel__arrow--right"
        onClick={nextImage}
      >
        ›
      </button>
    </div>
  );
};

export default Carousel;

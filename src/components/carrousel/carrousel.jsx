import React, { useEffect, useRef, useState } from "react";
import { imagesCarrousel } from "../../assets/imagesCarrousel";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";
import "./carrousel.css";

const Carrousel = () => {
  const listRef = useRef();
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef(null);

  useEffect(() => {
    // Reiniciar temporizador
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    intervalRef.current = setInterval(() => {
      scrollToImage("next");
    }, 2000);

    return () => {
      clearInterval(intervalRef.current);
    };
  }, [currentIndex]);

  const scrollToImage = (direction) => {
    if (direction === "prev") {
      setCurrentIndex((curr) => {
        const isFirstSlide = curr === 0;
        return isFirstSlide ? imagesCarrousel.length - 1 : curr - 1;
      });
    } else {
      setCurrentIndex((curr) => (curr + 1) % imagesCarrousel.length);
    }
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  const handlePrev = () => {
    clearInterval(intervalRef.current);
    scrollToImage("prev");
  };

  const handleNext = () => {
    clearInterval(intervalRef.current);
    scrollToImage("next");
  };

  return (
    <div className="main-container">
      <div className="slider-container">
        <div className="leftArrow" onClick={handlePrev}>
          <FaArrowCircleLeft />
        </div>
        <div className="rightArrow" onClick={handleNext}>
        <FaArrowCircleRight />
        </div>
        <div className="container-images">
          <ul ref={listRef}>
            {imagesCarrousel.map((item) => {
              return (
                <li key={item.id}>
                  <img src={item.img} alt="img" />
                </li>
              );
            })}
          </ul>
        </div>
        <div className="dots-container">
          {imagesCarrousel.map((_, idx) => (
            <div
              key={idx}
              className={`dot-container-item ${
                idx === currentIndex ? "active" : ""
              }`}
              onClick={() => goToSlide(idx)}
            >
              
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carrousel;

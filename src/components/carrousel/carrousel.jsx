import React, { useState, useEffect } from "react";
import img01 from "../../assets/1.jpg";
import img02 from "../../assets/2.jpg";
import img03 from "../../assets/3.jpg";
import img04 from "../../assets/4.jpg";
import img05 from "../../assets/5.jpg";
import "./carrousel.css";

const Carrousel = () => {
  const [position, setPosition] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const slider = document.querySelector("#slider");
    const sliderSection = document.querySelectorAll(".slider-section");
    const btnLeft = document.querySelector(".btn-left");
    const btnRight = document.querySelector(".btn-right");

    const widthImg = 100 / sliderSection.length;

    const moveToRight = () => {
      if (isTransitioning) return;
      setIsTransitioning(true);

      setPosition((prevPosition) => {
        if (prevPosition >= sliderSection.length - 1) {
          setTimeout(() => {
            slider.style.transition = "none";
            slider.style.transform = `translate(-${0}%)`;
            setIsTransitioning(false);
          }, 600); // Delay to match the transition time
          return 0;
        }
        setTimeout(() => {
          slider.style.transition = "all ease .6s";
          setIsTransitioning(false);
        }, 600); // Delay to match the transition time
        return prevPosition + 1;
      });
    };

    const moveToLeft = () => {
      if (isTransitioning) return;
      setIsTransitioning(true);

      setPosition((prevPosition) => {
        if (prevPosition <= 0) {
          setTimeout(() => {
            slider.style.transition = "none";
            slider.style.transform = `translate(-${widthImg * (sliderSection.length - 1)}%)`;
            setIsTransitioning(false);
          }, 600); // Delay to match the transition time
          return sliderSection.length - 1;
        }
        setTimeout(() => {
          slider.style.transition = "all ease .6s";
          setIsTransitioning(false);
        }, 600); // Delay to match the transition time
        return prevPosition - 1;
      });
    };

    btnLeft.addEventListener("click", moveToLeft);
    btnRight.addEventListener("click", moveToRight);

    return () => {
      btnLeft.removeEventListener("click", moveToLeft);
      btnRight.removeEventListener("click", moveToRight);
    };
  }, [isTransitioning]);

  return (
    <div className="container-carousel">
      <div className="carruseles" id="slider" style={{ transform: `translate(-${position * 100}%)` }}>
        <section className="slider-section">
          <img src={img01} alt="1" />
        </section>
        <section className="slider-section">
          <img src={img02} alt="2" />
        </section>
        <section className="slider-section">
          <img src={img03} alt="3" />
        </section>
        <section className="slider-section">
          <img src={img04} alt="4" />
        </section>
        <section className="slider-section">
          <img src={img05} alt="5" />
        </section>
      </div>
      <div className="btn-left" onClick={() => setPosition(position - 1)} disabled={isTransitioning}>
        <i className="bx bx-chevron-left"></i>
      </div>
      <div className="btn-right" onClick={() => setPosition(position + 1)} disabled={isTransitioning}>
        <i className="bx bx-chevron-right"></i>
      </div>
    </div>
  );
};

export default Carrousel;

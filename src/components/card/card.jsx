import React from "react";
import "./card.css";

const Card = (props) => {
  return (
    <div className="card__collection clear-fix">
        <div className="cards cards--two">
            <img src={props.img} className="img-responsive" alt="card_Image"/>
            <span className="cards--two__rect"></span>
            <span className="cards--two__tri"></span>
            <p>{props.nombre}</p>
            <ul className="cards__list">
            <li><i className="fab fa-facebook-f"></i></li>
            <li><i className="fab fa-twitter"></i></li>
            <li><i className="fab fa-instagram"></i></li>
            <li><i className="fab fa-linkedin-in"></i></li>
            </ul>
        </div>
    </div>
  );
};

export default Card;
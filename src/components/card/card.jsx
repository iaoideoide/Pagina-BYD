import React from "react";
import "./card.css";
import { Link } from "react-router-dom";

const Card = (props) => {
  return (
    <Link to={`/detalle/${props.id}`}>
      <div className="card__collection clear-fix">
          <div className="cards cards--two">
              <div className="contentCard">
                <img src={props.logo} className="img-responsive" alt="card_Image"/>
              </div>
              <span className="cards--two__rect"></span>
              <span className="cards--two__tri"></span>
              <p>{props.nombre}</p>
          </div>
      </div>
  </Link>
  );
};

export default Card;
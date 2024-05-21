import React from "react";
import "./cardsContainer.css";
import Card from "../card/card";
import { imagesMarcas } from "../../assets/imagesMarcas";

const CardsContainer = () => {

  return (
    <div className="cardsContainer">
        <div className="container">
            {imagesMarcas.map((item) => {
              return (
                <Card 
                    key = {item.id} 
                    img = {item.img}
                    nombre = {item.nombre}
                />
              );
            })}
        </div>
        
    </div>
  );
};

export default CardsContainer;
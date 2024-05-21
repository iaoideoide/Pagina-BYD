import React from "react";
import "./marcas.css";
import { imagesMarcas } from "../../assets/imagesMarcas";

const Marcas = () => {

  return (
    <div className="marcasContainer">
      <div className="marcas">
        {imagesMarcas.map((item) => {
              if(item.id === 7 | item.id === 5| item.id === 1)return (
                <div className="marca" id={item.id}>
                    <img src={item.img} alt="img" />
                </div>
              );
            })}
      </div>
        
      
    </div>
  );
};

export default Marcas;

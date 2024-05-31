import React from "react";
import "./marcas.css";
import { imagesMarcas } from "../../assets/imagesMarcas";

const Marcas = () => {

  return (
    <div className="marcasContainer">
      <div className="marcas">
        {imagesMarcas.map((item) => {
              if(item.nombre ==="Black + Decker" | item.nombre === "BYD" | item.nombre === "Stanley Termos")return (
                <div className="marca" id={item.id}>
                    <img src={item.logo} alt="logo" />
                </div>
              );
            })}
      </div>
        
      
    </div>
  );
};

export default Marcas;

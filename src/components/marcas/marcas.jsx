import React from "react";
import "./marcas.css";
import { imagesMarcas } from "../../assets/imagesMarcas";

const Marcas = () => {

  return (
    <div className="marcasContainer">
        {imagesMarcas.map((item) => {
              return (
                <div className="marca" id={item.id}>
                    <img src={item.img} alt="img" width="300" />
                </div>
              );
            })}
      
    </div>
  );
};

export default Marcas;

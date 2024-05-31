
import React from "react";
import "./quienesSomos.css";
import InfoQuienesSomos from "../infoQuienesSomos/infoQuienesSomos";
import Descargas from "../descargas/descargas";
import historia from "../../assets/Linea-Tiempo.png"


const QuienesSomos = () => {

  return (
    <div className="quienesSomos">
      <InfoQuienesSomos />
      <div>
        <h1>Historia</h1>
        <img src={historia} alt="" />
      </div>
      <Descargas/>
    </div>
  );
};

export default QuienesSomos;

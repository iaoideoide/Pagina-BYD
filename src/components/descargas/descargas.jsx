
import React from "react";
import "./descargas.css";
import catalogo from "../../assets/descargar-catalogo.jpg"
import brochure from "../../assets/descargar-brochure.jpg"


const Descargas = () => {

  return (
    <div className="descargasQuienesSomos">
        <div className="descarga">
            <h1>DESCARGAR CATÁLOGO</h1>
            <img src={catalogo} alt="" />
        </div>
        <div className="descarga">
            <h1>DESCARGAR BROCHURE</h1>
            <img src={brochure} alt="" id="img2"/>
        </div>
    </div>
  );
};

export default Descargas;

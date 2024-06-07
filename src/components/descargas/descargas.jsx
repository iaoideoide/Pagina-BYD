
import React from "react";
import "./descargas.css";
import catalogo from "../../assets/descargar-catalogo.webp"
import brochure from "../../assets/descargar-brochure.webp"
import Catalogo from "../catalogo/catalogo";


const Descargas = () => {

  return (
    <div className="descargasQuienesSomos">
        <div className="descarga">
            <h1>DESCARGAR CATÁLOGO</h1>
            <a href="https://drive.google.com/uc?export=download&id=1rDpHzdNk0r6_J0l4uY1DyqE0A3cYZKla"><img src={catalogo} alt="" id="img2"/></a>
        </div>
        <div className="descarga">
            <h1>DESCARGAR BROCHURE</h1>
            <a href="https://drive.google.com/uc?export=download&id=1Dnfgwtqk-tB-VVMIYLGo2HFKaNtRt-Tt"><img src={brochure} alt="" id="img2"/></a>
            
        </div>
    </div>
  );
};

export default Descargas;

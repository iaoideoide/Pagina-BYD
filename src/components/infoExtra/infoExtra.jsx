import React from "react";
import "./infoExtra.css";
import InfoLink from "../../infoLink/infoLink";
import { Link } from "react-router-dom";

const InfoExtra = () => {

  return (
    <div className="infoExtra">
        <div className="infoContainer">
            <div className="quienesSomos-info info">
                <h1>Quienes Somos</h1>
                <ul>
                <Link to="/quienesSomos">
                    <InfoLink 
                        text = "Visión"
                    />
                </Link>
                <Link to="/quienesSomos">
                    <InfoLink 
                        text = "Empresa"
                    />
                </Link>
                <Link to="/quienesSomos">
                    <InfoLink 
                        text = "Historia"
                    />
                </Link>
                </ul>
            </div>
            <div className="descargas info">
                <h1>Descargas</h1>
                <ul>
                    
                    <InfoLink 
                        link = "https://drive.google.com/uc?export=download&id=1rDpHzdNk0r6_J0l4uY1DyqE0A3cYZKla"
                        text = "Catalogo 2024"
                    />
                    <InfoLink 
                        link = "https://drive.google.com/uc?export=download&id=1XFc59kJWh0hLrtw77nGo0FXQ9YyTye86"
                        text = "Catalogo Stanley 2024"
                    />
                    <InfoLink 
                        link = "https://drive.google.com/uc?export=download&id=1Dnfgwtqk-tB-VVMIYLGo2HFKaNtRt-Tt"
                        text = "Brochure"
                    />
                    
                </ul>
            </div>
            <div className="info">
                <h1>Información de Contacto</h1>
                <p>Dirección: Moreno 1491, C.A.B.A., Argentina.</p>
                <p>Teléfono: 4383-2013</p>
                <p>contacto@bydsudamericana.com.ar</p>
            </div>
        </div>
    </div>
  );
};

export default InfoExtra;
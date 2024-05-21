import React from "react";
import "./infoExtra.css";
import InfoLink from "../../infoLink/infoLink";

const InfoExtra = () => {

  return (
    <div className="infoExtra">
        <div className="infoContainer">
            <div className="quienesSomos info">
                <h1>Quienes Somos</h1>
                <ul>
                    <InfoLink 
                        link = "https://www.instagram.com/"
                        text = "Visión"
                    />
                    <InfoLink 
                        link = "https://www.instagram.com/"
                        text = "Empresa"
                    />
                    <InfoLink 
                        link = "https://www.instagram.com/"
                        text = "Historia"
                    />
                </ul>
            </div>
            <div className="descargas info">
                <h1>Descargas</h1>
                <ul>
                    <InfoLink 
                        link = "https://www.instagram.com/"
                        text = "Catalogo BYD 2024"
                    />
                    <InfoLink 
                        link = "https://www.instagram.com/"
                        text = "Catalogo 2024"
                    />
                    <InfoLink 
                        link = "https://www.instagram.com/"
                        text = "Brochure"
                    />
                    <InfoLink 
                        link = "https://www.instagram.com/"
                        text = "Catalogo Stanley 2024"
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
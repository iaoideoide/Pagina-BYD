
import React from "react";
import "./infoQuienesSomos.css";
import fotoHeader from "../../assets/quienes-somos.jpg"


const InfoQuienesSomos = () => {

  return (
    <div className="infoQuienesSomosContainer">
        <div className="infoQuienesSomos">
            <div className="textos">
                <div>
                    <h1>Vision</h1>
                    <p>Construir relaciones y vínculos a largo plazo amigables con la Comunidad Global, el Medio Ambiente, Clientes y Proveedores, basados en el respeto, confianza y valores.</p>
                </div>
                <div>
                    <h1>Empresa</h1>
                    <p>3º Generación en el negocio de electrodomésticos y ferretería, con cobertura comercial y de servicio técnico en todo el país.</p>
                </div>      
            </div>
            <img src={fotoHeader} alt="" />
        </div>
    </div>
  );
};

export default InfoQuienesSomos;

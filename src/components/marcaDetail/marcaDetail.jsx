import React from "react";
import "./marcaDetail.css";
import { useParams } from "react-router-dom";
import { imagesMarcas } from "../../assets/imagesMarcas";

const MarcaDetail = () => {
    const { idMarca } = useParams();
    const marca = imagesMarcas.find(marca => marca.id === parseInt(idMarca));

    return (
        <div className="detallesMarca">
            {marca ? (
                <>
                    <h2 className="tituloMarca">{marca.nombre}</h2>
                    <p className="descripcionMarca">{marca.desc}</p>
                    <div className="imagenesMarca">
                        {marca.images.map((image, index) => (
                            <img key={index} src={image} alt={`${marca.nombre} ${index + 1}`} />
                        ))}
                    </div>
                </>
            ) : (
                <p>Marca no encontrada</p>
            )}
        </div>
    );
};

export default MarcaDetail;

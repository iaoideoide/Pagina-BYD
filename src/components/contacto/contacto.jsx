import React from "react";
import "./contacto.css";
import FormContacto from "../formContacto/formContacto";


const Contacto = () => {

  return (
    <div className="contacto">
        <div className="infoContacto">
            <h1>Contacto</h1>
            <p>Gracias por contactarse con nosotros. Por favor, completar el siguiente formulario y a la brevedad nos comunicaremos con usted.</p>
        </div>
      <FormContacto />
    </div>
  );
};

export default Contacto;

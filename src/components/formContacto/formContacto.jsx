import React from "react";
import "./formContacto.css";

const FormContacto = () => {

  return (
    <div className="form-container">
        <form action="#" method="post">
            <div className="form-group">
                <label htmlFor="nombre">Nombre y apellido</label>
                <input type="text" id="nombre" name="nombre" required />
            </div>
            <div className="form-group">
                <label htmlFor="email">E-mail</label>
                <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
                <label htmlFor="telefono">Teléfono de Contacto</label>
                <input type="tel" id="telefono" name="telefono" />
            </div>
            <div className="form-group">
                <label htmlFor="mensaje">Mensaje</label>
                <textarea id="mensaje" name="mensaje"></textarea>
            </div>
            <button type="submit">Enviar</button>
        </form>
    </div>
  );
};

export default FormContacto;

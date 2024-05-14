
import React, { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import logo from "../../assets/logo_bd_400.png"
import "./navbar.css";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="navbar">
      <div className="navbar-links">
        <div className="navbar-links_logo">
            <img src= {logo}/>
        </div>
        <div className="navbar-links_container">
          <p>
            <a href="#">Inicio</a>
          </p>
          <p>
            <a href="#">Quienes Somos</a>
          </p>
          <p>
            <a href="#">Servicio Postventa</a>
          </p>
          <p>
            <a href="#">Contacto</a>
          </p>
        </div>
      </div>

      <div className="navbar-menu">
        {toggleMenu ? (
          <RiCloseLine
            color="#000"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#000"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="navbar-menu_container scale-up-center">
            <div className="navbar-menu_container-links">
            <p>
            <a href="#">Inicio</a>
            </p>
            <p>
                <a href="#">Quienes Somos</a>
            </p>
            <p>
                <a href="#">Servicio Postventa</a>
            </p>
            <p>
                <a href="#">Contacto</a>
            </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
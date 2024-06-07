
import React, { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import logo from "../../assets/logo_bd_400.webp"
import "./navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="navbar">
      <div className="navbar-links">
        <div className="navbar-links_logo">
        <Link to="/"><img src= {logo}/></Link>
        </div>
        <div className="navbar-links_container">
          <p>
            <Link to="/">Inicio</Link>
          </p>
          <p>
            <Link to="/quienesSomos">Quienes Somos</Link>
          </p>
          <p>
            <Link to="/contacto">Contacto</Link>
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
            <Link to="/">Inicio</Link>
          </p>
          <p>
            <Link to="/quienesSomos">Quienes Somos</Link>
          </p>
          <p>
            <Link to="/contacto">Contacto</Link>
          </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;

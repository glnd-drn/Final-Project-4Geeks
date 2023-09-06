import React from "react";
import { Link } from "react-router-dom";
import "../../styles/navbar.css";
import logo from "../../img/Logo.png";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container">
        <Link to="/">
          <span className="navbar-brand mb-0 h1">
            <img src={logo} className="imagen"></img>
          </span>
        </Link>
        <div className="ml-auto">
          <Link to="/registrar">
            <button className="btn mx-2 botones">Registrarse</button>
          </Link>
          <Link to="/inicio-sesion">
            <button className="btn mx-2 botones">Iniciar Sesión</button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

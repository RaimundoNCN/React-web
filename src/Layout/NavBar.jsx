import React from "react";
import imageReact from "../assets/react.svg";
import { Link } from "react-router-dom";
import "../Style/StyleNavBar.css";

const NavBar = () => {
  return (
    <header>
      <nav>
        <div>
          <img src={imageReact}></img>
        </div>
        <hr />
        <h2>Projeto Criativo</h2>
        <ul>
          <Link className="routes" to="/">
            Inicio
          </Link>
          <Link className="routes" to="/contacts">
            Contatos
          </Link>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;

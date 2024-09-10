import React from "react";
import { Link } from "react-router-dom";
import "../Style/StyleNavBar.css";

const NavBar = () => {
  return (
    <header>
      <nav>
        <h2>DEV. Front-end</h2>
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

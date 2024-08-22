import React from "react";
import "../Style/StyleNavBar.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <header>
      <nav className="navBar">
        <ul>
          <Link className="routes" to="/">
            Inicio
          </Link>
          <Link className="routes" to="/contacts">
            Contatos
          </Link>
        </ul>
      </nav>
      <hr />
    </header>
  );
};

export default NavBar;

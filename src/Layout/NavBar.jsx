import React from "react";
import "../Style/StyleNavBar.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <header>
      <nav className="navBar">
        <ul className="routes">
          <Link to="/">Inicio</Link>
          <Link to="/contacts">Contatos</Link>
        </ul>
      </nav>
      <hr />
    </header>
  );
};

export default NavBar;

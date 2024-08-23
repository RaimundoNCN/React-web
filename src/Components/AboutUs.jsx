import React from "react";
import imageReact from "../assets/react.svg";
import "../Style/StyleAboutUs.css";

const AboutUs = () => {
  return (
    <div>
      <div className="container">
        <div>
          <img src={imageReact}></img>
        </div>
        <hr />
        <h2>Projeto de Criação</h2>
        <div>
          <p>Teste de Card</p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

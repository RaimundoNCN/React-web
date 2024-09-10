import React from "react";
import "../Style/StyleAboutUs.css";

const AboutUs = () => {
  return (
    <div className="infoProfileCard">
      <div className="cardsInfo">
        <div style={{ display: "flex" }}>
          <h1>Raimundo N.C. Neto</h1>
        </div>
        <div>
          Desenvolvendo Sistemas Web e Mobile até cumprir meus objetivos
          pessoais e como profissional, me tornar um Dev. FullStack.
        </div>
      </div>
      <div className="cardsInfo">
        <div>Tecnologias:</div>
        <div>JavaScript: React, React Native e Vue.js.</div>
        <div>Dart: Flutter.</div>
        <div>Git, GitHub.</div>
      </div>
    </div>
  );
};

export default AboutUs;

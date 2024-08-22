import React from "react";
import Navbar from "./Layout/NavBar";
import FooterInfo from "./Layout/FooterInfo";

import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Outlet />
      <FooterInfo />
    </>
  );
}

export default App;

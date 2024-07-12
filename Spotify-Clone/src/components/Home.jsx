import React from "react";
import Sidebar from "./Sidebar";
import MainContentHome from "./MainContentHome";
import NavbarBottom from "./NavbarBottom";

function Homepage() {
  return (
    <>
      <Sidebar />
      <MainContentHome />
      <NavbarBottom />
    </>
  );
}

export default Homepage;


// ho avuto problemi con git.. mi ha praticamente sovrascritto questo progetto con il progetto di Spaceflight, per questo troverai un solo commit. Ho sclerato un pm a capire come committare, mi sono arresa alla sovrascrittura
// per non parlare di una serie di problemi con le installazioni, tipo le icone di bootstrap, il solito dev che non mi da con il comando npm run dev..
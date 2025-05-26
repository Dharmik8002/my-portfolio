import React from "react";
import "./App.css";
import Navbar from "./Components/Comman/Navbar";
import Home from "./Components/Pages/Home";
import TechnicalSkills from "./Components/Pages/TechnicalSkills";
import About from "./Components/Pages/About";
import MyProjects from "./Components/Pages/MyProjects";
import Contactme from "./Components/Pages/Contactme";
import Footer from "./Components/Comman/Footer";

function App() {
  return (
    <>
      <div>
        <Navbar />
        <Home />
        <TechnicalSkills />
        <About />
        <MyProjects />
        <Contactme />
        <Footer />
      </div>
    </>
  );
}

export default App;

import React from "react";
import Navbar from "./Navbar/Navbar";
import { Home } from "./Home";
import "./App.scss"; // Import the SCSS file

function App() {
  return (
    <div id="root">
      <div className="navbar-container">
        <Navbar />
      </div>
      <div className="main-container">
        <Home />
      </div>
    </div>
  );
}

export default App;

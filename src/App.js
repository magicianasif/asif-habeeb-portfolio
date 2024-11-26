// src/App.js
import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import SocialIcons from "./components/SocialIcons";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <SocialIcons />
    </div>
  );
}

export default App;

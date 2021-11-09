import "./App.css";
import React from "react";
import LandingPage from "./LandingPage";
import About from "./About";
import Portfolio from "./Portfolio";

function App() {
  return (
    <div className="App">
      <LandingPage />
      <About />
      <Portfolio />
    </div>
  );
}

export default App;

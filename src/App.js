import "./App.css";
import React from "react";
import LandingPage from "./LandingPage";
import About from "./About";
import Portfolio from "./Portfolio";
import Noodlr from "./Noodlr";
import Breadbook from "./Breadbook";
import { useScrollPosition } from "./utilities/useScrollPosition"

function App() {

  useScrollPosition('scrollY')
  return (
    <div className="App">
      <LandingPage />
      <About />
      <Portfolio />
      <Noodlr />
      <Breadbook />
    </div>
  );
}

export default App;
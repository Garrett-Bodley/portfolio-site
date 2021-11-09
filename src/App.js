import "./App.css";
import React from "react";
import LandingPage from "./LandingPage";
import About from "./About";
import Hero from "./Hero";
import Noodlr from "./Noodlr";
import Breadbook from "./Breadbook";
import { useScrollPosition } from "./utilities/useScrollPosition"
import Javasketchr from "./Javasketchr";

function App() {

  useScrollPosition('scrollY')
  return (
    <div className="App">
      <LandingPage />
      <About />
      <Hero text="Portfolio"/>
      <Noodlr />
      <Breadbook />
      <Javasketchr/>
      <Hero text="Blog"/>
    </div>
  );
}

export default App;
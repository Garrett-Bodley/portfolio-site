import "./App.css";
import React from "react";
import LandingPage from "./LandingPage";
import About from "./About";
import Hero from "./Hero";
import Noodlr from "./Noodlr";
import Breadbook from "./Breadbook";
import { usePersistScrollPosition } from "./utilities/usePersistScrollPosition"
import Javasketchr from "./Javasketchr";
import  Navbar from "./Navbar"

function App() {

  usePersistScrollPosition('scrollY')
  return (
    <div className="App">
      <Navbar/>
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
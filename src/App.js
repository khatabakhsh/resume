import React, { Component } from "react";
import Data from "./data.json";
import Myself from "./components/sections/Myself";
import About from "./components/sections/About";
import Skills from "./components/sections/Skills";
import Navigation from "./components/Navigation";

import "./App.css";

class App extends Component {
  render() {
    return (
      <main className="App">
        <Navigation data={Data} />
        <Myself data={Data.sections[0]} />
        <About data={Data.sections[1]} />
        <Skills data={Data.sections[2]} />
      </main>
    );
  }
}

export default App;

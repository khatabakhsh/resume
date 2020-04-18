import React, { Component } from "react";
import SnowStorm from "react-snowstorm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTshirt } from "@fortawesome/free-solid-svg-icons";
import Myself from "./components/sections/Myself";
import About from "./components/sections/About";
import Skills from "./components/sections/Skills";
import Navigation from "./components/Navigation";
import Data from "./data.json";
import "./App.css";

var r; //global random variable
class App extends Component {
  constructor(props) {
    super(props);
    r = App.generateRandom();
    this.state = Data.theme[r];
  }
  static generateRandom() {
    return Math.floor(Math.random() * Data.theme.length);
  }
  changeColor = () => {
    let r_new = App.generateRandom();
    while (r === r_new) {
      r_new = App.generateRandom();
    }
    r = r_new;
    this.setState(Data.theme[r]);
    let elements = document.getElementsByClassName("___snowStorm___");
    for (let i = 0; i < elements.length; i++) {
      elements[i].style.color = Data.theme[r].obj;
    }
  };
  render() {
    return (
      <main className="App">
        <Navigation data={Data} theme={this.state} />
        <FontAwesomeIcon
          onClick={() => {
            this.changeColor();
          }}
          icon={faTshirt}
          className="tshirt"
          size="lg"
          fixedWidth
          style={{ color: this.state.obj }}
        />
        <Myself data={Data.sections[0]} theme={this.state} />
        <About data={Data.sections[1]} theme={this.state} />
        <Skills data={Data.sections[2]} theme={this.state} />
        <SnowStorm
          style={{ zIndex: "-10" }}
          animationInterval="50"
          flakesMax="32"
          flakesMaxActive="16"
          excludeMobile={false}
          followMouse={false}
          snowStick={false}
          vMaxY="5"
          vMaxX="5"
        />
      </main>
    );
  }
}

export default App;

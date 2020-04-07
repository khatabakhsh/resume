import React, { Component } from "react";
import { Link, Element } from "react-scroll";
import "./Navigation.css";

class Navigation extends Component {
  render() {
    return (
      <nav>
        <a href="">
          <Link
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={0}
            duration={600}
            delay={10}
          >
            About Me
          </Link>
        </a>
        <a href="">
          <Link
            activeClass="active"
            to="skills"
            spy={true}
            smooth={true}
            offset={0}
            duration={600}
            delay={10}
          >
            Skills
          </Link>
        </a>
      </nav>
    );
  }
}

export default Navigation;

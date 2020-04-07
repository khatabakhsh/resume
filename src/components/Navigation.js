import React, { Component } from "react";
import { Link, Element } from "react-scroll";
import "./Navigation.css";

class Navigation extends Component {
  render() {
    return (
      <nav>
        <Link
          activeClass="active"
          to="about"
          spy={true}
          smooth={true}
          offset={0}
          duration={600}
          delay={10}
        >
          <a href="">About Me</a>
        </Link>

        <Link
          activeClass="active"
          to="skills"
          spy={true}
          smooth={true}
          offset={0}
          duration={600}
          delay={10}
        >
          <a href=""> Skills</a>
        </Link>
      </nav>
    );
  }
}

export default Navigation;

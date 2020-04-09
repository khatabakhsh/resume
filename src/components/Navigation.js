import React, { Component } from "react";
import { Link, Element } from "react-scroll";
import "./Navigation.css";

class Navigation extends Component {
  render() {
    return (
      <nav>
        <Link
          className="link aboutme"
          activeClass="active"
          to="about"
          spy={true}
          smooth={true}
          offset={0}
          duration={600}
          delay={10}
        >
          <button href="" className="a aboutme">
            About Me
          </button>
        </Link>

        <Link
          className="link skills"
          activeClass="active"
          to="skills"
          spy={true}
          smooth={true}
          offset={0}
          duration={600}
          delay={10}
        >
          <button href="" className="a skill">
            Skills
          </button>
        </Link>
      </nav>
    );
  }
}

export default Navigation;

import React, { Component } from "react";
import { Link } from "react-scroll";
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
          <button>{this.props.data.sections[1].title}</button>
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
          <button>{this.props.data.sections[2].title}</button>
        </Link>
      </nav>
    );
  }
}

export default Navigation;

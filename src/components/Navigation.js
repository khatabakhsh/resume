import React, { Component } from "react";
import { Link } from "react-scroll";
import "./Navigation.css";

class Navigation extends Component {
  render() {
    return (
      <nav className="nav">
        <div>
          <Link
            style={{ zIndex: "10" }}
            className="link aboutme"
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={0}
            duration={600}
            delay={10}
          >
            <label style={{ color: this.props.theme.obj }} className="nav-btn">
              {this.props.data.sections[1].title}
            </label>
          </Link>

          <Link
            style={{ zIndex: "10" }}
            className="link skills"
            activeClass="active"
            to="skills"
            spy={true}
            smooth={true}
            offset={0}
            duration={600}
            delay={10}
          >
            <label style={{ color: this.props.theme.obj }} className="nav-btn">
              {this.props.data.sections[2].title}
            </label>
          </Link>
        </div>
      </nav>
    );
  }
}

export default Navigation;

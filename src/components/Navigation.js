import React, { Component } from "react";
import { Link } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTshirt } from "@fortawesome/free-solid-svg-icons";
import "./Navigation.css";

class Navigation extends Component {
  render() {
    return (
      <nav className="nav">
        <div>
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
            <a className="nav-btn">{this.props.data.sections[1].title}</a>
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
            <a className="nav-btn">{this.props.data.sections[2].title}</a>
          </Link>
        </div>
        <FontAwesomeIcon
          // style={{width: "100px"}}
          icon={faTshirt}
          className="nav-btn tshirt"
          size="lg"
          fixedWidth
          color="black"
        />
      </nav>
    );
  }
}

export default Navigation;

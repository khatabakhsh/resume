import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDown,
  faAngleDoubleUp,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-scroll";

class DownIcon extends Component {
  render() {
    const angle = this.props.arrow;
    const icon = angle === "UP" ? faAngleDown : faAngleDoubleUp;
    return (
      <Link
        style={{ zIndex: "10" }}
        activeClass="active"
        to={this.props.link}
        spy={true}
        smooth={true}
        offset={0}
        duration={600}
        delay={20}
      >
        <FontAwesomeIcon
          icon={icon}
          style={{
            transform: "translateY(-2vh)",
            cursor: "pointer",
            color: this.props.theme.obj,
          }}
          size="lg"
          fixedWidth
        />
      </Link>
    );
  }
}

export default DownIcon;

import React, { Component } from "react";
import { Element } from "react-scroll";

import Fullpage from "../Fullpage.js";
import Article from "../Article";
import DownIcon from "../DownIcon.js";

class About extends Component {
  render() {
    const title = this.props.data.title;
    const p1 = this.props.data.paragraphs[0];
    const p2 = this.props.data.paragraphs[1];
    return [
      <Element name="about" />,
      <Fullpage className="second">
        <Article>
          <h3>{title}</h3>
          <p>{p1}</p>
          <p>{p2}</p>
        </Article>
        <DownIcon arrow="UP" link="skills" />
      </Fullpage>,
    ];
  }
}
export default About;

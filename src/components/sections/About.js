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
      <Element name="about" theme={this.props.theme} />,
      <Fullpage className="second" theme={this.props.theme}>
        <Article>
          <h3 style={{ color: this.props.theme.obj }}>{title}</h3>
          <p style={{ color: this.props.theme.obj }}>{p1}</p>
          <p style={{ color: this.props.theme.obj }}>{p2}</p>
        </Article>
        <DownIcon arrow="UP" link="skills" theme={this.props.theme} />
      </Fullpage>,
    ];
  }
}
export default About;

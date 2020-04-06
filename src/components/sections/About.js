import React, { Component } from "react";
import Fullpage from "../Fullpage.js";
import "./About.css";

class About extends Component {
  render() {
    const title = this.props.data.title;
    const p1 = this.props.data.paragraphs[0];
    const p2 = this.props.data.paragraphs[1];
    return (
      <Fullpage className="second">
        <article>
          <h3>{title}</h3>
          <p>{p1}</p>
          <p>{p2}</p>
        </article>
      </Fullpage>
    );
  }
}
export default About;

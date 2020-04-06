import React, { Component } from "react";
import "./Fullpage.css";

class Fullpage extends Component {
  render() {
    const { children } = this.props;
    return (
      <section className={`fullpage ${this.props.className || ""}`}>
        {children}
      </section>
    );
  }
}

export default Fullpage;

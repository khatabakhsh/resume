import React, { Component } from "react";
import "./SkillCard.css";

class SkillCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="img">
          <img src={this.props.cards[this.props.className]} />
        </div>
        <div className="strong">
          <strong style={{ color: "black" }}>
            {this.props.className}
          </strong>
        </div>
      </div>
    );
  }
}

export default SkillCard;

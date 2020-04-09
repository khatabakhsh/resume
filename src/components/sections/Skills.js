import React, { Component } from "react";
import { Element } from "react-scroll";
import Fullpage from "../Fullpage.js";
import SkillCard from "../SkillCard.js";
import "./Skills.css";

class Skills extends Component {
  render() {
    const title = this.props.data.title;
    const cards = this.props.data.cards;
    return [
      <Element name="skills" />,
      <Fullpage className="third">
        <h3>{title}</h3>
        <div className="card-wrappers">
          {Object.keys(cards).map((card) => {
            return <SkillCard className={card} cards={cards} />;
          })}
        </div>
      </Fullpage>,
    ];
  }
}
export default Skills;

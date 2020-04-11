import React, { Component } from "react";
import { Element } from "react-scroll";

import Fullpage from "../Fullpage.js";
import Article from "../Article.js";
import SkillCard from "../SkillCard.js";
import DownIcon from "../DownIcon.js";

class Skills extends Component {
  render() {
    const title = this.props.data.title;
    const cards = this.props.data.cards;
    return [
      <Element name="skills" />,
      <Fullpage className="third">
        <Article>
          <h3>{title}</h3>
          <div className="card-wrappers">
            {Object.keys(cards).map((card) => {
              return <SkillCard className={card} cards={cards} />;
            })}
          </div>
        </Article>
        <DownIcon arrow="DOWN" link="myself" />
      </Fullpage>,
    ];
  }
}
export default Skills;

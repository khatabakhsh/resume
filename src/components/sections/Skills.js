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
      <Fullpage className="third" theme={this.props.theme}>
        <Article>
          <h3 style={{ color: this.props.theme.obj }}>{title}</h3>
          <div
            style={{ color: this.props.theme.back, zIndex: "2" }}
            className="card-wrappers"
          >
            {Object.keys(cards).map((card) => {
              return (
                <SkillCard
                  theme={this.props.theme}
                  className={card}
                  cards={cards}
                />
              );
            })}
          </div>
        </Article>
        <DownIcon arrow="DOWN" link="myself" theme={this.props.theme} />
      </Fullpage>,
    ];
  }
}
export default Skills;

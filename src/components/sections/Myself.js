import React, { Component } from "react";
import { SocialMediaIconsReact } from "social-media-icons-react";
import { Element } from "react-scroll";

import Fullpage from "../Fullpage";
import Article from "../Article";
import DownIcon from "../DownIcon";

class Myself extends Component {
  render() {
    const title = this.props.data.title;
    const subtitle = this.props.data.subtitle;
    const links = this.props.data.links;
    return [
      <Element name="myself" />,
      <Fullpage className="first" theme={this.props.theme}>
        <Article>
          <h1 style={{ color: this.props.theme.obj }}>{title}</h1>
          <h2 style={{ color: this.props.theme.obj }}>{subtitle}</h2>
          <div className="social-icon-list">
            {Object.keys(links).map((k) => {
              return (
                <div
                  className="social-icon"
                  style={{ margin: "4vmin", padding: "0px" }}
                >
                  <SocialMediaIconsReact
                    icon={k}
                    url={links[k]}
                    roundness="25%"
                    size="6vmin"
                    iconSize="5"
                  />
                </div>
              );
            })}
          </div>
        </Article>
        <DownIcon arrow="UP" link="about" theme={this.props.theme} />
      </Fullpage>,
    ];
  }
}
export default Myself;

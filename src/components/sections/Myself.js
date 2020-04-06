import React, { Component } from "react";
import { SocialMediaIconsReact } from "social-media-icons-react";
import Fullpage from "../Fullpage.js";
import "./Myself.css";

class Myself extends Component {
  render() {
    const title = this.props.data.title;
    const subtitle = this.props.data.subtitle;
    const links = this.props.data.links;
    return (
      <Fullpage className="first">
        <h1 className="title">{title}</h1>
        <h2 className="subtitle">{subtitle}</h2>
        <div className="social-icon-list">
          {Object.keys(links).map((k) => {
            return (
              <div className="social-icon">
                <SocialMediaIconsReact
                  icon={k}
                  url={links[k]}
                  roundness="25%"
                  size="2.5em"
                  iconSize="5"
                />
              </div>
            );
          })}
        </div>
      </Fullpage>
    );
  }
}
export default Myself;

import React, { Component } from "react";
import "./style.css";
import motivationList from "../staticStore/motivationslist";

class MainContent extends Component {
  constructor() {
    super();
    this.state = {
      motivations: motivationList
    };
  }
  render() {
    return (
      <div className="main-component">
        {this.state.motivations.map(motivation => (
          <div className="motivs">
            <h2>"{motivation.quote}"</h2>
            <span>-{motivation.author}</span>
          </div>
        ))}
      </div>
    );
  }
}
export default MainContent;

import React, { Component } from "react";
import edulist from "../staticStore/edulist";

class Education extends Component {
  constructor() {
    super();
    this.state = {
      educations: edulist
    };
  }

  render() {
    return (
      <div className="container">
        {this.state.educations.map(edu => (
          <div className="edu-card">
            <div className="img-holder">
              <img style={{ width: 300 }} src={edu.img} />
            </div>
            <div className="_info">
              <h2>{edu.institute_name}</h2>
              <h3>{edu.degree}</h3>
              <h2>{edu.year_of_passing}</h2>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default Education;

import React, { Component } from "react";
import "./style.css";
import projectList from "../staticStore/projectslist";

class Project extends Component {
  constructor() {
    super();
    this.state = {
      projects: projectList
    };
  }
  render() {
    return (
      <div className="main-component">
        {this.state.projects.map(project => (
          <div className="projects">
            <img style={{ width: 400 }} src={project.img} />
            <h2>{project.project_name}</h2>
            <h3>{project.details}</h3>
          </div>
        ))}
      </div>
    );
  }
}
export default Project;

import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from "./Components/Navbar";
import MainContent from "./Components/MainContent";
import Footer from "./Components/Footer";
import Codeforces from "./Components/Codeforces";
import Github from "./Components/Github";
import Project from "./Components/Projects";
import Education from "./Components/Education";
import Profile from "./Components/Profile";

import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    fetch("https://api.github.com/users/jadiribnahasan/repos")
      .then(Response => Response.json())
      .then(data => console.log(data));
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Route path="/github" render={() => <Github />} />
          <Route path="/codeforces" render={() => <Codeforces />} />
          <Route path="/home" render={() => <MainContent />} />
          <Route path="/projects" render={() => <Project />} />
          <Route path="/education" render={() => <Education />} />
          <Route path="/" exact render={() => <Profile />} />
        </div>
      </Router>
    );
  }
}

export default App;

import React, { Component } from "react";

class Github extends Component {
  constructor() {
    super();
    this.state = {
      profile: {},
      repositories: []
    };
  }

  componentDidMount() {
    fetch("https://api.github.com/users/jadiribnahasan")
      .then(Response => Response.json())
      .then(data => this.setState({ profile: data }));

    fetch("https://api.github.com/users/jadiribnahasan/repos")
      .then(Response => Response.json())
      .then(data => this.setState({ repositories: data }));
  }

  render() {
    return (
      <div>
        <div class="bio">
          <img src={this.state.profile.avatar_url} style={{ width: 300 }} />
          <h2>{this.state.profile.name}</h2>
          <h3>{this.state.profile.company}</h3>
          <span>Followers : {this.state.profile.followers}</span>
          <span>Following : {this.state.profile.following}</span>
          <a href={this.state.profile.html_url}>Github</a>
        </div>
        <div className="repoContainer">
          <h3>Repositories : {this.state.repositories.length}</h3>

          {this.state.repositories.map(repo => (
            <div className="Repos">
              <h4>{repo.name}</h4>
              <h5>{repo.language}</h5>
              <h5>Forks : {repo.forks_count}</h5>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Github;

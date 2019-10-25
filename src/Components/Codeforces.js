import React, { Component } from "react";
import "./style.css";
import "bootstrap/dist/css/bootstrap.css";

class Codeforces extends Component {
  constructor() {
    super();
    this.state = {
      ratedcontest: [],
      profile: []
    };
  }

  componentDidMount() {
    fetch("https://codeforces.com/api/user.rating?handle=angkon")
      .then(Response => Response.json())
      .then(data => this.setState({ ratedcontest: data.result }));

    fetch(" https://codeforces.com/api/user.info?handles=angkon")
      .then(Response => Response.json())
      .then(data => console.log(data));
    fetch(" https://codeforces.com/api/user.info?handles=angkon")
      .then(Response => Response.json())
      .then(data => this.setState({ profile: data.result[0] }));
  }

  render() {
    let i = 0;
    console.log(this.state.profile.lastName);
    return (
      <div>
        <div className="container-fluid profileinfo">
          <img style={{ width: 100 }} src={this.state.profile.avatar} />
          <h2>
            {this.state.profile.firstName + " " + this.state.profile.lastName}
          </h2>
          <span className="badge badge-info rank">
            Rank : {this.state.profile.rank}
          </span>
          <span className="badge badge-info rank">
            Max Rank : {this.state.profile.maxRank}
          </span>
          <span className="badge badge-info rank">
            Rating : {this.state.profile.rating}
          </span>
          <span className="badge badge-info rank">
            Max Rating : {this.state.profile.maxRating}
          </span>
          <span className="badge badge-info rank">
            Organization : {this.state.profile.organization}
          </span>
          <span className="badge badge-info rank">
            Friend of {this.state.profile.friendOfCount} users
          </span>
        </div>
        {!this.state.ratedcontest.length === 0 ? (
          <h1>No data</h1>
        ) : (
          <h3>
            Contest History of{" "}
            <a target="blank" href="https://codeforces.com/profile/angkon">
              Jadir Ibna Hasan
            </a>
          </h3>
        )}

        <table id="ratings">
          <thead>
            <tr>
              <th>#</th>
              <th>Contest</th>
              <th>Rank</th>
              <th>Rating change</th>
              <th>New rating</th>
              <th></th>
            </tr>
          </thead>
          {this.state.ratedcontest
            .sort((a, b) =>
              a.ratingUpdateTimeSeconds < b.ratingUpdateTimeSeconds ? 1 : -1
            )
            .map(contest => (
              <tbody className="tbody">
                <tr className="danger info">
                  <td>{this.state.ratedcontest.length - i++}</td>
                  <td>
                    <a>{contest.contestName}</a>
                  </td>
                  <td>
                    <a>{contest.rank}</a>
                  </td>

                  <td>
                    <span>{contest.newRating - contest.oldRating}</span>
                  </td>
                  <td>{contest.newRating}</td>
                  <td></td>
                </tr>
              </tbody>
            ))}
        </table>
      </div>
    );
  }
}

export default Codeforces;

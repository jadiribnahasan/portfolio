import React, { Component } from "react";
import profile from "../staticStore/profileDetails";
import "./style.css";

class Profile extends Component {
  constructor() {
    super();
    this.state = { profile: profile };
  }
  render() {
    return (
      <div className="container">
        <div className="image-box">
          <img class="card-image" src={this.state.profile.img} />
        </div>
        <div className="profile-name">
          <h3>
            {this.state.profile.name}({this.state.profile.nick_name})
          </h3>
          <div className="_bio">
            <p>{this.state.profile.bio}</p>
          </div>
          {this.state.profile.links.map(link => (
            <div>
              <a target="blank" href={link.url}>
                {link.linkname}
              </a>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Profile;

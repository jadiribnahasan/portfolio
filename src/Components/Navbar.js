import React from "react";
import Logo from "./Logo";
//import "./style.css";
import { Link } from "react-router-dom";

function Navbar() {
  const navstyle = {
    color: "red"
  };

  return (
    <div>
      <nav className="nav">
        <Logo />
        <div className="links ">
          <Link to="/">
            <a href="#">Jadir Ibna Hasan</a>
          </Link>
          <Link to="/home">
            <a href="#">Motivation</a>
          </Link>
          <Link to="/education">
            <a href="#">Education</a>
          </Link>
          <Link to="/projects">
            <a href="#">Projects</a>
          </Link>
          <Link to="/codeforces">
            <a href="#">Codeforces</a>
          </Link>
          <Link to="/github">
            <a href="#">Github</a>
          </Link>
        </div>
      </nav>
    </div>
  );
}
export default Navbar;

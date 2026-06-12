import React from "react";
import logo2 from "../../assets/logo2.png";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <img className="navbar__logo" src={logo2} alt="" />
      <div className="navbar__right">
        <ul>
          <li>Home</li>
          <li>TV Shows</li>
          <li>Movies</li>
          <li>New & Popular</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

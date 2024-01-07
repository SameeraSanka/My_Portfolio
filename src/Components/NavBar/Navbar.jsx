import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="n-wrapper">
      {/* left */}
      <div className="n-left">
        <h1 className="n-name">Sameera</h1>
      </div>
      {/* right */}
      <div className="n-right">
        <div className="n-list">
          <ul >
            <li>Home</li>
            <li>Education</li>
            <li>Experince</li>
            <li>Projects</li>
          </ul>
        </div>
        {/* <button className="button">Contact Me</button> */}
      </div>
    </div>
  );
};

export default Navbar;

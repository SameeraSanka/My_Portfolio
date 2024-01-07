import React from "react";
import "./Services.css";
import softwareEnginner from "../../assets/images/se.png";
import designer from "../../assets/images/de.png";
import uiUx from "../../assets/images/ui.png";
import Card from "../Card/Card";
import CV from "./Sameera-Madusanka-FlowCV-Resume-20240106.pdf";
import waveDown from '../../assets/images/qwe.png'
const Services = () => {
  return (
<>
<div className="services">
      {/* left */}
      <div className="left">
        <span>Here is my,</span>
        <span>Projects..</span>
        <span>
          Here, I showcase my innovative front-end developments <br /> and
          captivating designs, <br /> highlighting my proficiency in creating
          visually <br /> stunning and user-friendly web experiences...
        </span>
        <a href={CV} download>
          <button className="button s-button">Download CV</button>
        </a>

        <div className="blur s-blur" style={{ background: "#abf1ff94" }}></div>
      </div>

      {/* right */}
      <div className="right">
        <div style={{ left: "14rem" }}>
          <Card
            icon={softwareEnginner}
            heading={"as a"}
            details={"Devoloper"}
          />
        </div>
        <div style={{ top: "10rem", left: "-8rem" }}>
          <Card icon={designer} heading={"as a"} details={"Designer"} />
        </div>
        <div style={{ top: "23rem", left: "12rem" }}>
          <Card icon={uiUx} heading={"as a"} details={"UI/UX"} />
        </div>
        <div className="blur s-blur2" style={{ background: "var(--purple)" }}></div>
      </div>
    </div>
    <img className="serviceWave" src={waveDown} alt="asd" />
    </>
  );
};

export default Services;

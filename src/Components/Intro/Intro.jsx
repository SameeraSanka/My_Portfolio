import React from "react";
import "./Intro.css";
import Typical from "react-typical";
import Git from "../../assets/images/git_4494748.png"
import In from "../../assets/images/linkedin_4494498.png"
import MyPic from "../../assets/images/profile-pic(1).png"
import homeFooterImage from "../../assets/images/wave.png"



const Intro = () => {
  return (
    <>
    <div className="intro">
      {/* left */}
      <div className="i-left">
        <div className="i-name">
          <span>Hi! I am, </span>
          <span>Sameera Madusanka</span>
          <span>
            {" "}
            <Typical
              steps={[
                "I am a, ",
                2000,
                "I am a, Frontend Developer..",
                2000,
                "I am a, Designer..",
                2000,
                "I am a, UI/UX..",
                2000,
              ]}
              loop={Infinity}
              wrapper="p"
            />
          </span>
          <span>
            Frontend Developer with high level of experience in web designing
            and development, <br /> producting the Quality work..
          </span>
        </div>
        <div className="intro-buttons">
        <button className="button i-button">Hire me</button>
        <button className="button i-button2">My CV</button>
        </div>

        {/* <div className="i-icon">
            <img src={Git} alt="git" />
            <img src={In} alt="In" />
        </div> */}
      </div>

      {/* right */}
      <div className="i-right">
        <img src={MyPic} alt="" className="myImage" />
      </div>
    </div>
    <div className="wave">
        <img src={homeFooterImage} alt="" />
    </div>
    </>
    
  );
};

export default Intro;

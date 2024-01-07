import React from 'react'
import "./Footer.css";
import Wave from '../../assets/images/waveFooter.png'
import linkDin from '../../assets/images/linkedin_4494498.png'
import Git from '../../assets/images/git_4494748.png'
const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        
        <div className="f-icons">
            <img src={linkDin} alt="li" />
            <img src={Git} alt="git" />

        </div>
      </div>
    </div>
  )
}

export default Footer
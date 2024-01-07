import React from 'react'
import './Card.css'
const Card = ({icon, heading, details}) => {
  return (
    <div className="card">
        <img src={icon} alt="" />
        <span>{heading}</span>
        <span>{details}</span>
        <button className="button CardBtn">See More</button>
    </div>
  )
}

export default Card
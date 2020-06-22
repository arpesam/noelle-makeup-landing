import React from 'react';

import './index.css';


const UseCaseCard = ({ title, img, description }) => {
  return (
    <div className="use-case-card" >
      <img
        src={img}
        alt={title}
        height="137"
      />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  )
}

export default UseCaseCard;

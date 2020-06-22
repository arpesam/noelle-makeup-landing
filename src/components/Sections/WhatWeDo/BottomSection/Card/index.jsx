import React from 'react';

import './index.css';


const Card = ({ img, alt, title, description}) => {
  return (
    <div className="flex-column what-we-do-card">
      <img src={img} alt={alt} height="240" />
      <h3>{title}</h3>
      <div>{description}</div>
    </div>
  )
}

export default Card;

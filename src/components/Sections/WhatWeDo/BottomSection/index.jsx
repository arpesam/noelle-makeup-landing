import React from 'react';
import Card from './Card';

import { cardData } from './cards-data';
import './index.css';


const BottomSection = () => {
  return (
    <div className="bottom-section">
      {cardData.map((item) => (<Card {...item} key={item.id} /> ))}
    </div>
  )
}

export default BottomSection;

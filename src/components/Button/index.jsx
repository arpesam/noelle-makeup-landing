import React from 'react';

import './index.css';


const Button = (props) => {
  const {
    bgColor = '#000',
    title,
    width,
    minWidth = '240px',
    handleClick,
    mr,
    ml,
    mt,
    mb,
  } = props;
  return (
    <button
      type="button"
      className="action-button"
      onClick={handleClick}
      style={{
        background: bgColor,
        marginBottom: mb,
        marginLeft: ml,
        marginTop: mt,
        marginRight: mr,
        minWidth,
        width,
      }}
    >{title}</button>
  )
}

export default Button;

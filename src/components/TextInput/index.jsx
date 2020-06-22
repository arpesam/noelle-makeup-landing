import React from 'react';

import './index.css';


const TextInput = (props) => {
  const {
    type = 'text',
    label,
    id,
  } = props;
  return (
    <div className="text-input-container">
      <label htmlFor={id}>{label}: </label> <br />
      <input
        id={id}
        type={type}
        name={id}
        className="text-input"
      />
    </div>
  )
}

export default TextInput;

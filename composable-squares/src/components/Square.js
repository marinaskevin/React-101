import React from 'react';
import './App.css';

const Square = (props) => {
  return (
    <span style={{color: props.textColor, backgroundColor: props.backgroundColor}}>{props.textColor} on {props.backgroundColor}</span>
  );
};

export default Square;

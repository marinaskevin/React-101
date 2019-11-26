import React from 'react';

const Button = (props) => {
  return (
    <button className="btn btn-primary" onClick={function(){alert(props.sound)}}>What does the {props.pet} say?</button>
  );
};

export default Button;

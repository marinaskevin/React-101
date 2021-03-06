import React from 'react';
import MessageButton from './Button';

const InfoCard = (props) => {
  return (
    <div className="card mx-auto" style={{width: "18rem", display: "inline-block"}}>
      <img className="card-img-top" src={props.imagePath} alt={props.description}/>
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.description}</p>
        <MessageButton pet={props.title} sound={props.sound}/>
      </div>
    </div>
  );
};

export default InfoCard;


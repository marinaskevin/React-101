import React from 'react';

const Library = (props) => {
  return (
    <li className="list-group-item">
      <div className="row">
        <div class="col-4"><span className="rounded-circle border border-dark">{props.votes}</span></div>
        <div class="col-4"><h3>{props.name}</h3></div>
        <div class="col-4"><span className="rounded-circle border border-dark bg-primary text-white" onClick={function(){alert("You have voted for "+props.name+"!");}}>&#128935;</span></div>
      </div>
    </li>
  );
};

export default Library;

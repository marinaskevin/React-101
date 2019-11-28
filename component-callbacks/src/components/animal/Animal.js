import React from 'react';
import ReactDOM from 'react-dom';
import './Animal.css';

class Animal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.name,
      imagePath: props.imagePath,
      onPetAnimal: props.onPetAnimal
    };
  }
  render() {
    return (
      <div className="card" style={{ width: "18rem" }}>
         <img className="card-img-top" src={this.state.imagePath} alt={this.state.name}/>
         <div className="card-body">
           <div className="card-title">{this.state.name}</div>
           <button className="btn btn-primary" onClick={() => this.state.onPetAnimal(this.state.name)}>Pet the {this.state.name}</button>
         </div>
      </div>
    );
  }
}

export default Animal;

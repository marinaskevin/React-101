import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import Animal from './animal/Animal';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
       message: ``
    };
  }
  handleMessage(name) {
    const newMessage = `You just pet the ${name}!`;
    this.setState({message: newMessage});
  }
  render() {
    return (
      <div className="container text-center">
        <h1>Petting Zoo</h1>
        <h3 className="text-success">{this.state.message}</h3>
        <Animal name="Horse" imagePath="/images/horse.jpg" onPetAnimal={(name) => this.handleMessage(name)} />
        <Animal name="Goat" imagePath="/images/goat.jpg" onPetAnimal={(name) => this.handleMessage(name)} />
        <Animal name="Sheep" imagePath="/images/sheep.jpg" onPetAnimal={(name) => this.handleMessage(name)} />
      </div>
    );
  }
};

export default App;

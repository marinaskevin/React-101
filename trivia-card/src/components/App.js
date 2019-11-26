import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import TriviaCard from './TriviaCard';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    return (
      <div className="container text-center">
        <h1>Pets</h1>
        <TriviaCard title="Name that Animal!" question="What goes meow?" hint="A usually quiet, often shy creature" imagePath="./images/cat.jpg" />
        <TriviaCard title="Name that Animal!" question="What goes woof?" hint="A usually sociable, often protective creature" imagePath="./images/dog.jpg" />
        <TriviaCard title="Name that Animal!" question="What goes chirp?" hint="A light-feathered creature that loves to fly" imagePath="./images/bird.jpg" />
      </div>
    );
  }
};

export default App;

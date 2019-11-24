import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import Counter from './counter/Counter';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  render() {
    return (
      <div className="container">
        <Counter name="Inky" imagePath="images/Inky.jpg" />
        <Counter name="Blinky" imagePath="images/Blinky.jpg" />
        <Counter name="Pinky" imagePath="images/Pinky.jpg" />
        <Counter name="Clyde" imagePath="images/Clyde.jpg" />
      </div>
    )
  }
}

export default App;

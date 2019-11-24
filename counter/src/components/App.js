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
        <Counter name="Inky" imagePath="images/Inky.gif" />
        <Counter name="Blinky" imagePath="images/Blinky.gif" />
        <Counter name="Pinky" imagePath="images/Pinky.gif" />
        <Counter name="Clyde" imagePath="images/Clyde.gif" />
      </div>
    )
  }
}

export default App;

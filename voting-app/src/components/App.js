import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import Library from './Library';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    return (
      <div className="container text-center">
        <h1>Vote Your Favorite JS Library</h1>
        <ul className="list-group mx-auto">
          <Library name="React"/>
          <Library name="Vue"/>
          <Library name="Angular"/>
          <Library name="Ember"/>
        </ul>
      </div>
    );
  }
};

export default App;

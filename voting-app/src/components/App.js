import React from 'react';
import './App.css';
import Library from './Library';

const App = (props) => {
  return (
    <div className="container text-center">
      <h1>Vote Your Favorite JS Library</h1>
      <ul className="list-group mx-auto">
        <Library name="React" votes="15"/>
        <Library name="Vue" votes="12"/>
        <Library name="Angular" votes="9"/>
        <Library name="Ember" votes="3"/>
      </ul>
    </div>
  );
};

export default App;

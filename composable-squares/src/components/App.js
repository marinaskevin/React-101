import React from 'react';
import Square from './Square.js';
import './App.css';

const App = (props) => {
  return (
    <div>
      <Square textColor="white" backgroundColor="blue"/>
      <Square textColor="blue" backgroundColor="red"/>
      <Square textColor="green" backgroundColor="pink"/>
    </div>
  );
};

export default App;

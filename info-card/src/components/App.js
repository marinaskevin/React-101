import React from 'react';
import './App.css';
import InfoCard from './InfoCard';

const App = (props) => {
  return (
    <div className="container text-center">
      <h1>Pets</h1>
      <InfoCard title="Cat" sound="Meow!" description="A usually quiet, often shy creature" imagePath="./images/cat.jpg" />
      <InfoCard title="Dog" sound="Woof!" description="A usually sociable, often protective creature" imagePath="./images/dog.jpg" />
      <InfoCard title="Bird" sound="Chirp!" description="A light-feathered creature that loves to fly" imagePath="./images/bird.jpg" />
    </div>
  );
};

export default App;

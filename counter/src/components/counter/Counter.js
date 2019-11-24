import React from 'react';
import ReactDOM from 'react-dom';
import './Counter.css';

class Counter extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      count: 0,
      name: props.name,
      imagePath: props.imagePath
    }
  }
  updateCount() {
    this.setState(prevState => ({
      count: prevState.count + 1
    }));
  }
  render(){
    return (
      <div className="card" style={{ width: "18rem" }}>
        <img src={this.state.imagePath} className="card-img-top"/>
        <div className="card-body">
          <h1 className="card-title">Hello {this.state.name}!</h1>
          <button onClick={ () => this.updateCount() }>Click Me</button>
          <p className="card-text">You clicked me {this.state.count} times</p>
        </div>
      </div>
    )
  }
}

export default Counter;

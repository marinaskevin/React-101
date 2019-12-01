import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date().toLocaleTimeString()
    }
  }
  componentWillMount(){
    setTimeout(()=>{
      this.setState({time: new Date().toLocaleTimeString()})
    }, 2000);
  }
  render(){
    return (
      <div>
        <h1>{this.state.time}</h1>
      </div>
    )
  }
}

export default App;

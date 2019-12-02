import React from 'react';
import './App.css';
import List from './list/List';

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
    let users = ["Eddy", "Brendan", "Goose", "Eli", "Marcos"];
    return (
      <div className="container">
        <List users={users} loggedIn="Goose" />
      </div>
    )
  }
}

export default App;

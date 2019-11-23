import React from 'react';
import './App.css';

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            text: 'Stateful component!'
        }
    }
    render(){
        return (
            <div>
                <h1>{this.state.text}</h1>
                <button
                    onClick={ () => this.setState({ text: 'State has changed!' }) } >
                    Click to change state's text value!
                </button>
            </div>
        )
    }
}

export default App;

import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // initially, we can set this to an empty array
            pokemon: []
        };
    }
    componentWillMount() {
        axios.get("https://pokeapi.co/api/v2/pokemon/")
        // when we get a response, we will update state with the results of the request
            .then((response) => (
                this.setState({pokemon: response.data.results})
            ));
    }
    render() {
        // we can then map over our pokemon array in state to produce some application UI
        return (
            <div>
                <h2>Available Pokemon</h2>
                <ul>
                    {this.state.pokemon.map((pokemon, idx) => {
                        return <li key={idx}>{pokemon.name}</li>;
                    })}
                </ul>
            </div>
        );
    }
}

export default App;

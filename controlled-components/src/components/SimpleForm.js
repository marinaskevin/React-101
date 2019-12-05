import React from 'react';

class SimpleForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ""
        };
    }

    // we can use es6 arrow functions to "bind" the callback method
    onInputChange = (event) => {
        this.setState({text: event.target.value});
    }
    onFormSubmit = (event) => {
        event.preventDefault();
        alert(`${this.state.text} was submitted!`);
        this.setState({text: ""});
    }
    render() {
        return (
            <form onSubmit={this.onFormSubmit}>
                <input type="text"
                    // value is "controlled" by state
                    value={this.state.text}
                    // we will fire a callback when input changes
                    onChange={this.onInputChange}/>
                <button>Submit</button>
            </form>
        )
    }
}

export default SimpleForm;

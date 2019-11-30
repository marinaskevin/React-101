import React from 'react';
import ReactDOM from 'react-dom';

class Library extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.name,
      votes: 0
    };
  }
  vote() {
    this.setState(prevState => ({votes: prevState.votes + 1}));
  }
  render() {
    return (
      <li className="list-group-item">
        <div className="row">
          <div class="col-4"><span className="rounded-circle border border-dark">{this.state.votes}</span></div>
          <div class="col-4"><h3>{this.state.name}</h3></div>
          <div class="col-4"><span className="rounded-circle border border-dark bg-primary text-white" onClick={ () => this.vote() }>&#128935;</span></div>
        </div>
      </li>
    );
  }
};

export default Library;

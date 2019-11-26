import React from 'react';
import ReactDOM from 'react-dom';

class TriviaCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: props.title,
      question: props.question,
      hint: props.hint,
      imagePath: props.imagePath
    }
  }
  swapInfo() {
    document.getElementById("question-"+this.state.hint).classList.toggle("d-none");
    document.getElementById("hint-"+this.state.hint).classList.toggle("d-none");
  }
  render() {
    return (
      <div className="card mx-auto" onClick={ () => this.swapInfo() } style={{width: "18rem", display: "inline-block"}}>
        <img className="card-img-top" src={this.state.imagePath} alt={this.state.question}/>
        <div className="card-body" id={"question-"+this.state.hint}>
          <h5 className="card-title">{this.state.title}</h5>
          <p className="card-text">{this.state.question}</p>
        </div>
        <div className="card-body d-none" id={"hint-"+this.state.hint}>
          <p className="card-text">{this.state.hint}</p>
        </div>
      </div>
    );
  }
};

export default TriviaCard;


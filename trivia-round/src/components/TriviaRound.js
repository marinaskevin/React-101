import React from 'react';

class TriviaRound extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      question: props.question,
      onRightAnswer: props.onRightAnswer,
      onWrongAnswer: props.onWrongAnswer,
      hintRevealed: false
    }
  }
  rightAnswer() {
     this.state.onRightAnswer(this.state.hintRevealed);
  }
  wrongAnswer() {
     this.state.onWrongAnswer(this.state.hintRevealed);
  }
  flipCard() {
    this.setState({ hintRevealed: true });
    document.getElementById("description").classList.toggle("d-none");
    document.getElementById("hint").classList.toggle("d-none");
  }
  render() {
    let answerList = this.state.question.answers.map((answer,index) => {
      if(answer.isCorrect) {
        return (<button class="btn btn-primary" key={"q"+this.state.questionId+"-a"+answer.answerId} onClick={ () => this.rightAnswer() }>{answer.value}</button>);
      } else {
        return (<button class="btn btn-primary" key={"q"+this.state.questionId+"-a"+answer.answerId} onClick={ () => this.wrongAnswer() }>{answer.value}</button>);
      }
    });
    return (
      <div className="text-center" key={this.state.question.questionId}>
        <div className="card" key={this.state.question.topic} style={{ width: "18rem", height: "24rem", margin: "auto" }} onClick={ () => this.flipCard() }>
          <img className="card-img-top" src={this.state.question.topic.imageUrl} alt={this.state.question.topic.title}/>
          <div className="card-body" id="description">
            <div className="card-title">{this.state.question.topic.title}</div>
            <div className="card-text">{this.state.question.description}</div>
          </div>
          <div className="card-body d-none" id="hint">
            <div className="card-text">{this.state.question.hint}</div>
          </div>
        </div>
        <div id={"q"+this.state.questionId+"-answers"} className="d-flex justify-content-around" style={{ padding: "20px" }}>
          {answerList}
        </div>
      </div>
    );
  }
}

export default TriviaRound;

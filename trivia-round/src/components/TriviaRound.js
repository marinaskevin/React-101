import React from 'react';

class TriviaRound extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      question: props.question
    }
  }
  correctAnswer(questionId) {
    alert("Correct!");
  }
  wrongAnswer(questionId) {
    alert("Wrong!");
  }
  render() {
    let answerList = this.state.question.answers.map((answer,index) => {
      if(answer.isCorrect) {
        return (<button class="btn btn-primary" key={"q"+this.state.questionId+"-a"+answer.answerId} onClick={ () => this.correctAnswer(answer.questionId)}>{answer.value}</button>);
      } else {
        return (<button class="btn btn-primary" key={"q"+this.state.questionId+"-a"+answer.answerId} onClick={ () => this.wrongAnswer(answer.questionId)}>{answer.value}</button>);
      }
    });
    return (
      <div className="jumbotron text-center" key={this.state.question.questionId}>
        <div className="card" key={this.state.question.topic} style={{ width: "18rem", margin: "20px auto" }}>
          <img className="card-img-top" src={this.state.question.topic.imageUrl} alt={this.state.question.topic.title}/>
          <div className="card-body">
            <div className="card-title">{this.state.question.topic.title}</div>
            <div className="card-text">{this.state.question.description}</div>
          </div>
          <div className="card-body d-none">
            <div className="card-text">{this.state.question.hint}</div>
          </div>
        </div>
        <div id={"q"+this.state.questionId+"-answers"} className="d-flex justify-content-around">
          {answerList}
        </div>
      </div>
    );
  }
}

export default TriviaRound;

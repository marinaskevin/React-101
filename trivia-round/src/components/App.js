import React from 'react';
// NOTE: you will need to build TriviaRound.js for component export
import TriviaRound from './TriviaRound';
const testQuestion = {
    "questionId": 1,
    "description": "What player holds the career record for most stolen bases?",
    "hint": "This player stole a single season record of 130 bases in 1983 as a member of the Oakland Athetics",
    "topicId": 1,
    "topic": {
      "topicId": 1,
      "title": "Baseball",
      "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvV_tsbT_kw10GstYSzppI60QKpc7_hRSzkHrRf3_IvYJZoPBqIg"
    },
    "answers": [
      {
        "answerId": 1,
        "value": "Rickey Henderson",
        "questionId": 1,
        "isCorrect": true
      },
      {
        "answerId": 2,
        "value": "Wade Boggs",
        "questionId": 1,
        "isCorrect": false
      },
      {
        "answerId": 3,
        "value": "Willie Mays Hayes",
        "questionId": 1,
        "isCorrect": false
      }
    ]
};

class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        score: 0,
        time: 0,
        timer: null,
        hintRevealed: false,
        answered: false
      };
      this.timer = this.timer.bind(this);
    }
    onRightAnswer(hintRevealed) {
      if(this.state.answered) return;
      this.setState({ hintRevealed: hintRevealed, answered: true });
      clearInterval(this.state.timer);
      document.getElementById("correct").classList.remove("d-none");
    }
    onWrongAnswer(hintRevealed) {
      if(this.state.answered) return;
      this.setState({ hintRevealed: hintRevealed, answered: true });
      clearInterval(this.state.timer);
      document.getElementById("wrong").classList.remove("d-none");
    }
    componentDidMount() {
      this.setState({timer: setInterval(this.timer, 1000)});
    }
    timer() {
      this.setState(prevState => ({time: prevState.time + 1}));
    }
    render() {
      var hintDeduct = this.state.hintRevealed ? -1 : 0;
      var timeDeduct = this.state.time > 10 ? -2 : 0;
      timeDeduct = this.state.time > 20 ? timeDeduct-2 : timeDeduct;
      return (
        <div className="text-center">
          <div className="float-left"><h1>{this.state.time}</h1></div>
          <TriviaRound question={testQuestion} onRightAnswer={ (hintRevealed) => this.onRightAnswer(hintRevealed) } onWrongAnswer={ (hintRevealed) => this.onWrongAnswer(hintRevealed) }/>
          <div id="correct" class="d-none">
            <h1>Correct! Score +{5+timeDeduct+hintDeduct}</h1>
            <button className="btn btn-primary">Next Question</button>
          </div>
          <div id="wrong" class="d-none">
            <h1>Wrong!</h1>
            <button className="btn btn-primary">Next Question</button>
          </div>
        </div>
      );
    }
};
export default App;

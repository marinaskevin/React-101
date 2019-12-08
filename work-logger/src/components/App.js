import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      project: "",
      description: "",
      minutes: "",
      personal: [],
      work: [],
      personalMinutes: 0,
      workMinutes: 0
    };
  }
  onProjectChange = (event) => {
    this.setState({ project: event.target.value });
  }
  onDescriptionChange = (event) => {
    this.setState({ description: event.target.value });
  }
  onMinutesChange = (event) => {
    this.setState({ minutes: event.target.value });
  }
  onFormSubmit = (event) => {
    event.preventDefault();
    if(this.state.description.length < 5) {
      alert("Description should be a least 5 characters long.");
      return;
    }
    if(isNaN(Number(this.state.minutes)) || this.state.minutes < 0 || this.state.minutes > 240) {
      alert("Minutes should a whole number in the range 0 to 240.");
      return;
    }
    if(this.state.project === "Personal") {
      this.setState((prevState) => (
        {
          personal: prevState.personal.concat({
            minutes: this.state.minutes,
            description: this.state.description
          }),
          personalMinutes: prevState.personalMinutes+Number(this.state.minutes)
        }
      ));
    }
    else if(this.state.project === "Work") {
      this.setState((prevState) => (
        {
          work: prevState.work.concat({
            minutes: this.state.minutes,
            description: this.state.description
          }),
          workMinutes: prevState.workMinutes+Number(this.state.minutes)
        }
      ));
    }
    else {
      alert("Please select a project.");
    }
  }
  printTask(task, index) {
    return (
      <div className="row" key={index}>
        <div className="col-sm-4">{Math.trunc(task.minutes/60)}:{(task.minutes%60).toString().padStart(2,0)}</div>
        <div className="col-sm-8 text-danger">{task.description}</div>
      </div>
    );
  }
  render() {
    let personal = this.state.personal.map((task, index) => {
      return this.printTask(task, index);
    });
    let work = this.state.work.map((task, index) => {
      return this.printTask(task, index);
    });
    return (
      <div className="container">
        <h1 className="p-3">Work Logger</h1>
        <form onSubmit={this.onFormSubmit}>
          <div className="form-group row">
            <label for="project" className="col-sm-2 col-form-label">Project</label>
            <div className="col-sm-10">
              <select id="project" className="form-control" value={this.state.project} onChange={this.onProjectChange}>
                <option>Choose one...</option>
                <option>Personal</option>
                <option>Work</option>
              </select>
            </div>
          </div>
          <div className="form-group row">
            <label for="description" className="col-sm-2 col-form-label">Description</label>
            <div className="col-sm-10">
              <input id="description" className="form-control" value={this.state.description} onChange={this.onDescriptionChange} />
            </div>
          </div>
          <div className="form-group row">
            <label for="minutes" className="col-sm-2 col-form-label">Minutes</label>
            <div className="col-sm-10">
              <input id="minutes" className="form-control" value={this.state.minutes} onChange={this.onMinutesChange} />
            </div>
          </div>
          <button className="btn btn-primary" type="submit">Add</button>
        </form>
        <hr />
        <div className="d-flex justify-content-around">
          <div className="card d-inline-block">
            <div className="card-body">
              <div className="card-title d-inline-block">Personal</div>
              <div className="card-text d-inline-block float-right text-danger">{Math.trunc(this.state.personalMinutes/60)}:{(this.state.personalMinutes%60).toString().padStart(2,0)}</div>
              <div className="card-text">{personal}</div>
            </div>
          </div>
          <div className="card d-inline-block">
            <div className="card-body">
              <div className="card-title d-inline-block">Work</div>
              <div className="card-text d-inline-block float-right text-danger">{Math.trunc(this.state.workMinutes/60)}:{(this.state.workMinutes%60).toString().padStart(2,0)}</div>
              <div className="card-text">{work}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

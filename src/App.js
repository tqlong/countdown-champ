import React, { Component } from 'react';
//import logo from './logo.svg';
import Clock from './Clock';
import Timer from './Timer';
import './App.css';
import {Form, FormControl, Button} from 'react-bootstrap';

class App extends Component {
  state = {
    deadline: 'December 25, 2017',
    newDeadline: '',
    newTimer: '',
    timer: '10:10:10'
  }

  changeDeadline = () => {
    this.setState({
      deadline: this.state.newDeadline
    });
  }

  handleNewDeadlineChange = (evt) => {
    this.setState({
      newDeadline: evt.target.value
    });
  }

  handleTimerChange = (evt) => {
    this.setState({
      newTimer: evt.target.value
    })
  }

  changeTimer = () => {
    this.setState({
      timer: this.state.newTimer
    });
  }

  render() {
    return (
      <div className="App">
        <div className="App-title">Countdown to {this.state.deadline}</div>
        <Clock deadline = {this.state.deadline} />
        <Form inline>
          <FormControl className="deadline-input"
            placeholder='new date'
            onChange={this.handleNewDeadlineChange}
          />
          <Button onClick={this.changeDeadline}>Submit</Button>
        </Form>

        <Timer timer={this.state.timer} />
        <Form inline>
          <FormControl className="timer-input"
            placeholder='new time to count down'
            onChange={this.handleTimerChange}
          />
          <Button onClick={this.changeTimer}>Submit</Button>
        </Form>
      </div>
    );
  }
}

export default App;

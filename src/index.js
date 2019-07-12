import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date()
    };
  }
  
  startTimer() {
    this.setState({
      date: new Date()
    });
  }
  componentDidMount() {
    this.timerId = setInterval(() => this.startTimer(), 1000);
  }
  componentWillUnmount() {
    clearInterval(this.timerId);
  }
  render() {
    return (
      <h1>Time is: {this.state.date.toLocaleTimeString()}</h1>     
    );
  }
}

function timer() {
  ReactDOM.render(
    <Clock />,
    document.getElementById('root')
  );
}

setInterval(timer, 1000);
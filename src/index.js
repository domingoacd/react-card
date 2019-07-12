import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date()
    };
  }
  
  render() {
    return (
      <section className="main-container">
        <Character-image />
        <Character-info />
        <Menu-side />
      </section>   
    );
  }
}

function timer() {
  ReactDOM.render(
    <Card />,
    document.getElementById('root')
  );
}

setInterval(timer, 1000);
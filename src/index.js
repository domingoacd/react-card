import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';

class CharacterImage extends React.Component {
  render() {
    return (
      <div className="characterImage">
        
      </div>
    )
  };
}
class CharacterInfo extends React.Component {
  render() {
    return (
      <div className="characterInfo">

      </div>
    )
  };
}
class CharacterSelection extends React.Component {
  render() {
    return (
      <div className="characterSelection">

      </div>
    )
  };
}
class MenuSide extends React.Component {
  render() {
    return (
      <div className="menuSide">

      </div>
    )
  };
}

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
        <CharacterImage />
        <CharacterInfo />
        <CharacterSelection />
        <MenuSide />
      </section>   
    );
  }
}

ReactDOM.render(
  <Card />,
  document.getElementById('root')
);

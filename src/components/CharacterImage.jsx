import React from 'react';
import ReactDOM from 'react-dom';
import superman from '../img/superman.png';

export default class CharacterImage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      image: props.imageToShow,
      altText: props.altText
    }
  }
  render() {
    return (
      <div className="characterImage">
        <img
          src={this.props.imageToShow}
          alt={this.props.altText}
        />
        <div className="email_box">
          example@something.com
        </div>
      </div>
    )
  };
}
import React from 'react';
import ReactDOM from 'react-dom';

export default class CharacterHolder extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      key: props.characterData.code,
      image: props.characterData.image,
      title: props.characterData.title,
      name: props.characterData.name,
      comic_house: props.characterData.comic_house,
      info: props.characterData.info,
      biography: props.characterData.biography,
      enemies: props.characterData.enemies,
      partnerships: props.characterData.partnerships,
      active: false

    }

    this.manageClick = this.manageClick.bind(this);
  }

   manageClick() {
     this.props.click(this);
   }

  render() {
    return (
      <img
        className={`thumb ${this.state.active ? "active" : ""}`}
        src={this.state.image}
        alt={this.state.title}
        key={this.state.key}
        onClick={this.manageClick}
      />
    )
  }
}
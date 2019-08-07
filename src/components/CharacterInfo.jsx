import React from 'react';
import ReactDOM from 'react-dom';

export default class CharacterInfo extends React.Component {

  render() {
    return (
      <div className="characterInfo">
        <p className="comic_house">
          {this.props.data.house}
        </p>
        <h1>{this.props.data.title}</h1>
        <h4 className="character_name">{this.props.data.name}</h4>
        <p className="character_summary">{this.props.data.infoText}</p>
        <ul className="character_links">
          <li><a href={this.props.data.biographyLink}>Biography</a></li>
          <li><a href={this.props.data.enemiesLink}>Enemies</a></li>
          <li><a href={this.props.data.partnershipsLink}>Partnerships</a></li>
        </ul>
      </div>
    )
  };
}
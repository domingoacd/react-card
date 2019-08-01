import React from 'react';
import ReactDOM from 'react-dom';

export default class CharacterInfo extends React.Component {
  render() {
    return (
      <div className="characterInfo">
        <p className="comic_house">
          DC
        </p>
        <h1>Man <br />of Steel</h1>
        <h4 className="character_name">Kal El</h4>
        <p className="character_summary">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas tincidunt, sem porta interdum fringilla, diam massa rutrum nibh, id condimentum purus urna nec turpis. </p>
        <ul className="character_links">
          <li><a href="">Biography</a></li>
          <li><a href="">Enemies</a></li>
          <li><a href="">Partnerships</a></li>
        </ul>
      </div>
    )
  };
}
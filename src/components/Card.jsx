import React from 'react';
import ReactDOM from 'react-dom';
import superman from '../img/superman.png';
import spiderman from '../img/spiderman.png';
import wolverine from '../img/wolverine.png';
import CharacterImage from './CharacterImage';
import CharacterInfo from './CharacterInfo';
import CharacterSelection from './CharacterSelection';
import MenuSide from './MenuSide';

export default class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      charactersList: [
        {
          code: "000",
          image: superman,
          title: "Man of Steel",
          name: "Kal El",
          comic_house: "DC",
          info: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas tincidunt, sem porta 
                interdum fringilla, diam massa rutrum nibh, id condimentum purus urna nec turpis.`,
          biography: "https://www.google.com",
          enemies: "https://www.google.com",
          partnerships: "https://www.google.com"
        },
        {
          code: "001",
          image: spiderman,
          title: "Amazing Spider-Man",
          name: "Peter Parker",
          comic_house: "MARVEL",
          info: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas tincidunt, sem porta 
                interdum fringilla, diam massa rutrum nibh, id condimentum purus urna nec turpis.`,
          biography: "https://www.facebook.com",
          enemies: "https://www.facebook.com",
          partnerships: "https://www.facebook.com"
        },
        {
          code: "002",
          image: wolverine,
          title: "Weapon X Logan",
          name: "Logan",
          comic_house: "MARVEL",
          info: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas tincidunt, sem porta 
                interdum fringilla, diam massa rutrum nibh, id condimentum purus urna nec turpis.`,
          biography: "https://www.twitter.com",
          enemies: "https://www.twitter.com",
          partnerships: "https://www.twitter.com"
        },
        {
          code: "003",
          image: superman,
          title: "Man of Steel",
          name: "Kal El",
          comic_house: "DC",
          info: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas tincidunt, sem porta 
                interdum fringilla, diam massa rutrum nibh, id condimentum purus urna nec turpis.`,
          biography: "https://www.google.com",
          enemies: "https://www.google.com",
          partnerships: "https://www.google.com"
        },
        {
          code: "004",
          image: spiderman,
          title: "Amazing Spider-Man",
          name: "Peter Parker",
          comic_house: "MARVEL",
          info: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas tincidunt, sem porta 
                interdum fringilla, diam massa rutrum nibh, id condimentum purus urna nec turpis.`,
          biography: "https://www.facebook.com",
          enemies: "https://www.facebook.com",
          partnerships: "https://www.facebook.com"
        },
        {
          code: "005",
          image: wolverine,
          title: "Weapon X Logan",
          name: "Logan",
          comic_house: "MARVEL",
          info: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas tincidunt, sem porta 
                interdum fringilla, diam massa rutrum nibh, id condimentum purus urna nec turpis.`,
          biography: "https://www.twitter.com",
          enemies: "https://www.twitter.com",
          partnerships: "https://www.twitter.com"
        },
      ],
      activeCharacter: ""
    };
  }

  changeCharacter(event) {
    const characterClicked = event.target;
    console.log("hey->", characterClicked.props);
  }

  render() {
    return (
      <section className="main-container">
        <CharacterImage imageToShow="" altText="" />
        <CharacterInfo />
        <CharacterSelection characters={this.state.charactersList} manageClick={this.changeCharacter} />
        <MenuSide />
      </section>
    );
  }
}
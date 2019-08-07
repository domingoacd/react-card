import React from 'react';
import ReactDOM from 'react-dom';
import superman from '../img/superman.png';
import spiderman from '../img/spiderman.png';
import wolverine from '../img/wolverine.png';
import CharacterImage from './CharacterImage.jsx';
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
          partnerships: "https://www.google.com",
          isActive: false
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
          partnerships: "https://www.facebook.com",
          isActive: false
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
          partnerships: "https://www.twitter.com",
          isActive: false
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
          partnerships: "https://www.google.com",
          isActive: false
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
          partnerships: "https://www.facebook.com",
          isActive: false
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
          partnerships: "https://www.twitter.com",
          isActive: false
        },
      ],
      activeCharacter: ""
    };
    this.changeCharacter = this.changeCharacter.bind(this);
    this.getCharacterImage = this.getCharacterImage.bind(this);
    this.getCharacterName = this.getCharacterName.bind(this);
  }

  componentDidMount() {
    this.setState({
      charactersList: this.state.charactersList.map((character,index) => {
        if(index === 0) {
          character.isActive = true;
        }
        return character;
      })
    });
  }

  getCharacterImage() {
    const activeCharacter = this.state.charactersList.find(character => {
      return character.isActive;
    });

    if (activeCharacter) {
      return activeCharacter.image;
    } 
    return "";
  }

  getCharacterName() {
    const activeCharacter = this.state.charactersList.find(character => {
      return character.isActive;
    });

    if (activeCharacter) {
      return activeCharacter.title;
    } 
    return "";
  }

  changeCharacter(element) {
    this.setState({
      charactersList: this.state.charactersList.map(character => {
        if (character.code === element.props.characterData.code) {
          character.isActive = true;
        } else if (character.isActive) {
          character.isActive = false;
        }
        return character;
      })
    });
  }

  render() {
    return (
      <section className="main-container">
        <CharacterImage 
          imageToShow={this.getCharacterImage()} 
          altText={this.getCharacterName()} 
        />
        <CharacterInfo />
        <CharacterSelection characters={this.state.charactersList} manageClick={this.changeCharacter} />
        <MenuSide />
      </section>
    );
  }
}
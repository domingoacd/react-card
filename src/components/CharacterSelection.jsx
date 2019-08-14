import React from 'react';
import ReactDOM from 'react-dom';
import image_next from '../img/next.png';
import image_prev from '../img/back.png';
import CharacterHolder from './CharacterHolder';

export default class CharacterSelection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentSelectedCharacter: 0,
      characters: props.characters,
      amountOfCharacters: props.characters.length - 1
    };

    this.moveSlideBackwards = this.moveSlideBackwards.bind(this);
    this.moveSlideForward = this.moveSlideForward.bind(this);

  }

  getTranslatedPixelsFromElement(element) {
    const translatedRule = element.style.transform;
    if (translatedRule.toLowerCase().includes("translate")) {
      return Number(translatedRule.slice(translatedRule.indexOf('(') + 1, translatedRule.indexOf('p')));
    }
    return 0;
  }

  moveSlideBackwards() {
    const componentNode = ReactDOM.findDOMNode(this);
    const thumbs = componentNode.querySelectorAll('img.thumb');
    const sliderContainer = componentNode.querySelector('.image_slide');
    const isTheFirstCharacter = 
                  thumbs[0].getBoundingClientRect().left >= sliderContainer.getBoundingClientRect().left;
    const innerSlider = componentNode.querySelector('.image_slide__inner');
    const pixelsTranslated = this.getTranslatedPixelsFromElement(innerSlider);

    if (!isTheFirstCharacter) {
      innerSlider.style.transform = `translateX(${pixelsTranslated + thumbs[0].offsetWidth}px)`;
    } 
  }

  moveSlideForward() {
    const componentNode = ReactDOM.findDOMNode(this);
    const sliderContainer = componentNode.querySelector('.image_slide');
    const innerSlider = componentNode.querySelector('.image_slide__inner');
    const thumbs = componentNode.querySelectorAll('img.thumb');
    const pixelsTranslated = this.getTranslatedPixelsFromElement(innerSlider);
    const isTheLastCharacter = thumbs[thumbs.length - 1].getBoundingClientRect().right < sliderContainer.getBoundingClientRect().right;
    if (!isTheLastCharacter) {
      innerSlider.style.transform = `translateX(-${pixelsTranslated*-1 + thumbs[0].offsetWidth}px)`;
    } 
  }


  render() {
    const charactersImages = this.state.characters.map((character, index) => {
      return (
        <CharacterHolder
          characterData={character}
          key={character.code}
          isActive = {character.isActive}
          click={this.props.manageClick} />)
    });

    return (
      <div className="characterSelection">
        <button className="prev_btn" onClick={this.moveSlideBackwards}>
          <img src={image_prev} alt="" />
          PRV
        </button>
        <div className="image_slide">
          <div className="image_slide__inner">
            {
              charactersImages
            }
          </div>
        </div>
        <button className="next_btn" onClick={this.moveSlideForward}>
          NXT
          <img src={image_next} alt="" />
        </button>
      </div>
    )
  };
}
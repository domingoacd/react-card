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
    const currentCharacterNumber = this.state.currentSelectedCharacter;
    const isTheFirstCharacter = currentCharacterNumber === 0;
    const nextCharacterNumber = isTheFirstCharacter ?
      this.state.amountOfCharacters : this.state.currentSelectedCharacter - 1;
    const componentNode = ReactDOM.findDOMNode(this);
    const sliderContainer = componentNode.querySelector('.image_slide');
    const innerSlider = componentNode.querySelector('.image_slide__inner');
    const thumbs = componentNode.querySelectorAll('img.thumb');
    const characterOverflowsSlide = sliderContainer.getBoundingClientRect().left > thumbs[nextCharacterNumber].getBoundingClientRect().left;
    const pixelsTranslated = this.getTranslatedPixelsFromElement(innerSlider);
    thumbs[this.state.currentSelectedCharacter].classList.remove('active');
    thumbs[nextCharacterNumber].classList.add('active');

    if (characterOverflowsSlide) {
      innerSlider.style.transform = `translateX(${pixelsTranslated + (sliderContainer.getBoundingClientRect().left - thumbs[nextCharacterNumber].getBoundingClientRect().left)}px)`;
    } else if (isTheFirstCharacter) {
      innerSlider.style.transform = `translateX(-${thumbs[thumbs.length - 1].getBoundingClientRect().right - sliderContainer.getBoundingClientRect().right}px)`;
    }

    this.setState({
      currentSelectedCharacter: nextCharacterNumber
    });
  }

  moveSlideForward() {
    const currentCharacterNumber = this.state.currentSelectedCharacter;
    const isTheLastCharacter = currentCharacterNumber === this.state.amountOfCharacters;
    const nextCharacterNumber = isTheLastCharacter ? 0 : currentCharacterNumber + 1;
    const componentNode = ReactDOM.findDOMNode(this);
    const sliderContainer = componentNode.querySelector('.image_slide');
    const innerSlider = componentNode.querySelector('.image_slide__inner');
    const thumbs = componentNode.querySelectorAll('img.thumb');
    const characterOverflowsSlide = sliderContainer.getBoundingClientRect().right < thumbs[nextCharacterNumber].getBoundingClientRect().right;

    thumbs[currentCharacterNumber].classList.remove('active');
    thumbs[nextCharacterNumber].classList.add('active');

    if (characterOverflowsSlide) {
      innerSlider.style.transform = `translateX(-${thumbs[nextCharacterNumber].getBoundingClientRect().right - innerSlider.getBoundingClientRect().right + 20}px)`;
    } else if (isTheLastCharacter) {
      innerSlider.style.transform = "unset";
    }
    this.setState({
      currentSelectedCharacter: nextCharacterNumber
    });
  }


  render() {
    const charactersImages = this.state.characters.map((character, index) => {
      return (
        <CharacterHolder
          characterData={character}
          key={character.code}
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
import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import superman from './img/superman.png';
import spiderman from './img/spiderman.png';
import wolverine from './img/wolverine.png';
import menu_button from './img/menu.png';
import logo_facebook from './img/facebook-logo.png';
import logo_instagram from './img/instagram-logo.png';
import logo_youtube from './img/youtube.png';
import image_next from './img/next.png';
import image_prev from './img/back.png';

class CharacterImage extends React.Component {
  render() {
    return (
      <div className="characterImage">
        <img src={superman} alt="superman_picture" />
        <div className="email_box">
          example@something.com
        </div>
      </div>
    )
  };
}
class CharacterInfo extends React.Component {
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
class CharacterSelection extends React.Component {
  render() {
    return (
      <div className="characterSelection">
        <button className="prev_btn">
          <img src={image_prev} alt="" />
          PRV
        </button>
        <div className="image_slide">
          <div className="image_slide__inner">
            <img className="thumb thumb--1 active" src={superman} alt="" />
            <img className="thumb thumb--2" src={wolverine} alt="" />
            <img className="thumb thumb--3" src={spiderman} alt="" />
            <img className="thumb thumb--1" src={superman} alt="" />
            <img className="thumb thumb--2" src={wolverine} alt="" />
            <img className="thumb thumb--3" src={spiderman} alt="" />
          </div>
        </div>
        <button className="next_btn">
          NXT
          <img src={image_next} alt="" />
        </button>
      </div>
    )
  };
}
class MenuSide extends React.Component {
  render() {
    return (
      <div className="menu">
        <div className="menu__toggle">
          <img src={menu_button} alt="" />
        </div>
        <div className="menu__volume">
          <div className="menu__volume__inner">
            <p>Vol.</p>
              <div className="progressBar">
                <div className="progressBar__inner"></div>
              </div>
            <p>75</p>
            <p>|</p>
            <p className="fade_text">100</p>
          </div>
        </div>
        <div className="menu__social">
          <a href="https://www.facebook.com">
            <img src={logo_facebook} alt="" className="social-logo social-logo--facebook" />
          </a>
          <a href="https://www.instagram.com">
            <img src={logo_instagram} alt="" className="social-logo social-logo--instagram" />
          </a>
          <a href="https://www.youtube.com">
            <img src={logo_youtube} alt="" className="social-logo social-logo--youtube" />
          </a>
        </div>
        <div className="menu__language">
          <select name="" id="" className="languages_box">
            <option value="">ENG</option>
            <option value="">SPA</option>
          </select>
        </div>
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


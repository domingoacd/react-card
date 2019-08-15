import React from 'react';
import ReactDOM from 'react-dom';
import menu_button from '../img/menu.png';
import logo_facebook from '../img/facebook-logo.png';
import logo_instagram from '../img/instagram-logo.png';
import logo_youtube from '../img/youtube.png';

export default class MenuSide extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      classes: '',
      toggled: false
    }
    this.toggleMenu = this.toggleMenu.bind(this);
  }
  toggleMenu() {
    console.log('eeee');
    this.setState({
      classes: this.state.toggled? "toggle": "",
      toggled: !this.state.toggled
    });
  }

  render() {
    return (
      <div className={'menu '+this.state.classes}>
        <div className="menu__toggle" onClick={this.toggleMenu}>
          <img  src={menu_button} alt=""/>
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
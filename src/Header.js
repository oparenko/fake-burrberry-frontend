import React, { Component } from 'react';
import logo from './logo.svg';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <header className="header">
        <a className="header__link" href="#">
          <img src={logo} alt="Burberry Logo"/>
        </a>
      </header>
    );
  }
}

export default Header;

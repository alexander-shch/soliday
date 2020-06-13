import React, { Component } from 'react';
import solidayLogo from '../../assets/media/soliday.jpg';

import './nav-bar.component.scss';

export default class NavBar extends Component {
  render() {
    return (
      <nav className='navbar' role='navigation' aria-label='main navigation'>
        <a className='navbar-item' href='/'>
          <img src={solidayLogo} alt='soliday' />
        </a>
      </nav>
    );
  }
}

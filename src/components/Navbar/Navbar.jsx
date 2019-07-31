import React, { Component } from 'react';
import  Toggle from '../../assets/img/toggle.png';
import './Navbar.scss';

export default class Navbar extends Component {
  state = {
    menus: ['Home', 'About', 'Media', 'Contact Us']
  }
  render() {
    
    const menuItem = this.state.menus.map(menu => <li key={menu} className="menu_item">{menu}</li> );

    return (
      <nav className="nav">
        <label htmlFor="toggle"><img src={Toggle} alt=""/></label>
        <input type="checkbox" id="toggle" />
        <ul className="menu">
          {menuItem}
        </ul>
      </nav>
    )
  }
}

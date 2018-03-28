// @flow

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './header.scss';

type PropType = {};
type StateType = {
  isMobileMenuActive: boolean,
}

class Header extends Component<PropType, StateType> {
  constructor() {
    super();

    this.state = {
      isMobileMenuActive: false,
    };
  }

  onHamburgerClick = () => this.toggleMobileMenuActivity();
  onHamburgerKeyUp = () => this.toggleMobileMenuActivity();

  toggleMobileMenuActivity = () => {
    this.setState({
      isMobileMenuActive: !this.state.isMobileMenuActive,
    });
  }

  render() {
    const activeClass = this.state.isMobileMenuActive ? 'active' : '';

    return (
      <header className="header">
        <div
          className={`${activeClass} header__hamburger`}
          onClick={this.onHamburgerClick}
          onKeyUp={this.onHamburgerKeyUp}
          role="menuitem"
          tabIndex="0"
        >
          <span className="header__hamburger-bar" />
          <span className="header__hamburger-bar" />
          <span className="header__hamburger-bar" />
        </div>
        <nav className={`${activeClass} header__nav`}>
          <Link className="header__link" to="/">Main</Link>
          <Link className="header__link" to="/rockets">Rockets</Link>
          <Link className="header__link" to="/launches">Launches</Link>
          <Link className="header__link" to="/contacts">Contacts</Link>
        </nav>
      </header>
    );
  }
}

export default Header;

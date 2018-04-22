// @flow

import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './header.scss';

type PropType = {
  isMobileMenuActive: boolean,
  listen: (location?: Object, action?: string) => void,
  toggleMobileMenuActivity: () => { type: string },
};

class Header extends Component<PropType> {
  componentDidMount() {
    this.listenRouteChanges();
  }

  onHamburgerClick = () => this.toggleMobileMenuActivity();
  onHamburgerKeyUp = () => this.toggleMobileMenuActivity();

  listenRouteChanges = () => {
    this.props.listen(() => {
      if (this.props.isMobileMenuActive) {
        this.props.toggleMobileMenuActivity();
      }
    });
  }

  toggleMobileMenuActivity = () => {
    this.props.toggleMobileMenuActivity();
  }

  render() {
    const activeClass = this.props.isMobileMenuActive ? 'active' : '';

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

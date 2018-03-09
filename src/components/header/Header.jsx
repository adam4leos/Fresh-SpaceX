// @flow

import React from 'react';
import { Link } from 'react-router-dom';
import './header.scss';

const Header = () => (
  <header className="header">
    <Link className="header__link" to="/">Main</Link>
    <Link className="header__link" to="/rockets">Rockets</Link>
    <Link className="header__link" to="/launches">Launches</Link>
    <Link className="header__link" to="/contacts">Contacts</Link>
  </header>
);

export default Header;

// @flow

import React from 'react';
import Copyright from './../../components/copyright/Copyright.jsx';

import './contacts.scss';

function Contacts() {
  return (
    <div>
      <main className="contacts">
        <a className="contacts__link" href="https://www.linkedin.com/in/adam-leos/" rel="noopener noreferrer" target="_blank">LinkedIn</a>
        <a className="contacts__link contacts__link--facebook" href="https://www.facebook.com/4leos" rel="noopener noreferrer" target="_blank">Facebook</a>
        <a className="contacts__link contacts__link--gmail" href="mailto:leos2397@gmail.com">GMail - leos2397@gmail.com</a>
      </main>
      <footer className="footer">
        <Copyright />
      </footer>
    </div>
  );
}

export default Contacts;

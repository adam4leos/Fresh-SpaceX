import React from 'react';
import './spinner.scss';

const Spinner = () => (
  <div className="spinner">
    <div className="spinner__circle" />
    <div className="spinner__circle spinner__circle--second" />
    <div className="spinner__circle spinner__circle--third" />
    <div className="spinner__circle spinner__circle--fourth" />
    <div className="spinner__circle spinner__circle--fifth" />
  </div>
);

export default Spinner;

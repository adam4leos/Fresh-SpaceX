import React from 'react';
import PropTypes from 'prop-types';
import './rocketBlock.scss';

const RocketBlock = ({
  id,
  name,
  active: isRocketActive,
}) => {
  /* eslint-disable global-require */
  const imageSource = require(`./../../img/${id}.jpg`);
  /* eslint-enable global-require */

  return (
    <div className="rocketBlock">
      <div className="rocketBlock__heading">{name} ({isRocketActive ? 'Inactive' : 'Active'})</div>
      <img src={imageSource} alt={name} className="rocketBlock__image" />
    </div>
  );
};

RocketBlock.propTypes = {
  name: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired,
  id: PropTypes.string.isRequired,
  // cost_per_launch: PropTypes.number.isRequired,
  // first_flight: PropTypes.string.isRequired,
};

export default RocketBlock;

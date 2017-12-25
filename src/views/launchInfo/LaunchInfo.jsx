import React from 'react';
import PropTypes from 'prop-types';
import './launchInfo.scss';

const LaunchInfo = ({
  launch_year: launchYear,
  launch_success: isLaunchSuccess,
}) => (
  <div className="launch-info">
    Is Launch Success - {isLaunchSuccess ? 'Yes' : 'Nope'}<br />
    Launch Year - {launchYear}
  </div>
);

// RocketInfo.propTypes = {
//   description: PropTypes.string.isRequired,
//   cost_per_launch: PropTypes.number.isRequired,
//   boosters: PropTypes.number.isRequired,
//   country: PropTypes.string.isRequired,
//   stages: PropTypes.number.isRequired,
//   first_flight: PropTypes.string.isRequired,
//   diameter: PropTypes.shape({
//     feet: PropTypes.number,
//     meters: PropTypes.number.isRequired,
//   }).isRequired,
//   height: PropTypes.shape({
//     feet: PropTypes.number,
//     meters: PropTypes.number.isRequired,
//   }).isRequired,
//   mass: PropTypes.shape({
//     lb: PropTypes.number.isRequired,
//     kg: PropTypes.number.isRequired,
//   }).isRequired,
//   engines: PropTypes.shape({
//     number: PropTypes.number.isRequired,
//     type: PropTypes.string.isRequired,
//     propellant_1: PropTypes.string.isRequired,
//     propellant_2: PropTypes.string.isRequired,
//   }).isRequired,
// };

export default LaunchInfo;

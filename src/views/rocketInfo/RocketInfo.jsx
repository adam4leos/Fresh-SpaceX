import React from 'react';
import PropTypes from 'prop-types';
import './rocketInfo.scss';

const RocketInfo = ({
  boosters,
  cost_per_launch: costPerLaunch,
  country,
  diameter,
  engines,
  first_flight: firstFlight,
  height,
  mass,
  stages,
  description,
}) => (
  <div className="rocket-info">
    <p>{description}</p>
    Cost per launch - {costPerLaunch}<br />
    Number of busters - {boosters}<br />
    Country - {country}<br />
    diameter - {diameter.meters} meters <br />
    height - {height.meters} meters <br />
    mass - {mass.kg} kg <br />
    Number of stages - {stages} <br />
    First fly - {firstFlight} <br />
    engines - {engines.number} {engines.type} type engines using
    {engines.propellant_1} and {engines.propellant_2}
  </div>
);

RocketInfo.propTypes = {
  description: PropTypes.string.isRequired,
  cost_per_launch: PropTypes.number.isRequired,
  boosters: PropTypes.number.isRequired,
  country: PropTypes.string.isRequired,
  stages: PropTypes.number.isRequired,
  first_flight: PropTypes.string.isRequired,
  diameter: PropTypes.shape({
    feet: PropTypes.number,
    meters: PropTypes.number.isRequired,
  }).isRequired,
  height: PropTypes.shape({
    feet: PropTypes.number,
    meters: PropTypes.number.isRequired,
  }).isRequired,
  mass: PropTypes.shape({
    lb: PropTypes.number.isRequired,
    kg: PropTypes.number.isRequired,
  }).isRequired,
  engines: PropTypes.shape({
    number: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
    propellant_1: PropTypes.string.isRequired,
    propellant_2: PropTypes.string.isRequired,
  }).isRequired,
};

export default RocketInfo;

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
  // TODO add switcher for system of measurement
  <div className="rocket-info">
    <h3 className="rocket-info__heading">{description}</h3>
    <p className="rocket-info__engines">
      ({engines.number} &quot;{engines.type}&quot; type engines using&nbsp;
      {engines.propellant_1} and {engines.propellant_2})
    </p>
    <table>
      <tbody>
        <tr>
          <td>Cost per launch</td>
          <td>{costPerLaunch}</td>
        </tr>
        <tr>
          <td>Number of busters</td>
          <td>{boosters}</td>
        </tr>
        <tr>
          <td>Country</td>
          <td>{country}</td>
        </tr>
        <tr>
          <td>diameter</td>
          <td>{diameter.meters} meters</td>
        </tr>
        <tr>
          <td>height</td>
          <td>{height.meters} meters</td>
        </tr>
        <tr>
          <td>mass</td>
          <td>{mass.kg} kg</td>
        </tr>
        <tr>
          <td>Number of stages</td>
          <td>{stages}</td>
        </tr>
        <tr>
          <td>First fly</td>
          <td>{firstFlight}</td>
        </tr>
      </tbody>
    </table>
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

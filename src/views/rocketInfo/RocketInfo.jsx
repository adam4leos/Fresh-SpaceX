import React from 'react';
import PropTypes from 'prop-types';
import Toggle from 'react-toggle';
import 'react-toggle/style.css';
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
  isMetricSystem,
  toggleMetricSystem,
}) => {
  const measurementUnits = {
    length: isMetricSystem ? 'meters' : 'feet',
    mass: isMetricSystem ? 'kg' : 'lb',
  };

  return (
    <div className="rocket-info">
      {/* TODO repaint switcher */}
      <label htmlFor="measurement-toggle" className="rocket-info__measurement">
        <Toggle
          defaultChecked={isMetricSystem}
          onChange={toggleMetricSystem}
          icons={false}
          id="measurement-toggle"
        />
        <span>Use Metric System</span>
      </label>
      <div className="rocket-info__details">
        <h3 className="rocket-info__heading">{description}</h3>
        <p className="rocket-info__engines">
          ({engines.number} &quot;{engines.type}&quot; type engines using&nbsp;
          {engines.propellant_1} and {engines.propellant_2})
        </p>
      </div>
      <table className="rocket-info__table">
        <tbody>
          <tr className="rocket-info__row">
            <td className="rocket-info__data">Cost per launch</td>
            <td className="rocket-info__data">{costPerLaunch}</td>
          </tr>
          <tr className="rocket-info__row">
            <td className="rocket-info__data">Number of busters</td>
            <td className="rocket-info__data">{boosters}</td>
          </tr>
          <tr className="rocket-info__row">
            <td className="rocket-info__data">Country</td>
            <td className="rocket-info__data">{country}</td>
          </tr>
          <tr className="rocket-info__row">
            <td className="rocket-info__data">diameter</td>
            <td className="rocket-info__data">{diameter[measurementUnits.length]} {measurementUnits.length}</td>
          </tr>
          <tr className="rocket-info__row">
            <td className="rocket-info__data">height</td>
            <td className="rocket-info__data">{height[measurementUnits.length]} {measurementUnits.length}</td>
          </tr>
          <tr className="rocket-info__row">
            <td className="rocket-info__data">mass</td>
            <td className="rocket-info__data">{mass[measurementUnits.mass]} {measurementUnits.mass}</td>
          </tr>
          <tr className="rocket-info__row">
            <td className="rocket-info__data">Number of stages</td>
            <td className="rocket-info__data">{stages}</td>
          </tr>
          <tr className="rocket-info__row">
            <td className="rocket-info__data">First fly</td>
            <td className="rocket-info__data">{firstFlight}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

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
  isMetricSystem: PropTypes.bool.isRequired,
  toggleMetricSystem: PropTypes.func.isRequired,
};

export default RocketInfo;

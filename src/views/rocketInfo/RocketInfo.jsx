// @flow

import React from 'react';
import Toggle from 'react-toggle';
import 'react-toggle/style.css';
import './rocketInfo.scss';
import type { RocketInfoType } from '../../flowTypes/flowTypes';

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
}: RocketInfoType): React$Element<*> => {
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

export default RocketInfo;

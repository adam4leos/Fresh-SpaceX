import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import './launchBlock.scss';

const LaunchBlock = ({
  flight_number: flightNumber,
  launch_date_unix: unixLaunchDate,
  links,
  rocket,
}) => (
  <div className="launch-block">
    <div className="launch-block__info">
      <h3 className="launch-block__heading">Launch #{ flightNumber }</h3>
      <p className="launch-block__description">
        {rocket.rocket_name} in {moment.unix(unixLaunchDate).format('DD MMM, YYYY (H:mma)')}
      </p>
    </div>
    <img src={links.mission_patch} alt="launch_patch" className="launch-block__patch" />
  </div>
);

LaunchBlock.propTypes = {
  flight_number: PropTypes.number.isRequired,
  launch_date_unix: PropTypes.number.isRequired,
};

export default LaunchBlock;

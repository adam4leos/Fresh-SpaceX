import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import './launchBlock.scss';

const LaunchBlock = ({
  flight_number: flightNumber,
  launch_date_unix: unixLaunchDate,
  launch_success: isLaunchSucceeded,
  links,
  rocket,
}) => (
  <div className="launch-block">
    <span className="launch-block__status">{isLaunchSucceeded ? 'Succeeded' : 'Failed'}</span>
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
  launch_success: PropTypes.bool.isRequired,
  links: PropTypes.shape({
    mission_patch: PropTypes.string,
  }).isRequired,
  rocket: PropTypes.shape({
    rocket_name: PropTypes.string.isRequired,
  }).isRequired,
};

export default LaunchBlock;

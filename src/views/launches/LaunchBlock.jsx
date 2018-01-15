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
}) => {
  /* eslint-disable global-require */
  const imageSource = require('./../../img/missing.png');
  /* eslint-enable global-require */

  return (
    <div className="launch-block">
      {isLaunchSucceeded !== null ? <span className="launch-block__status">{isLaunchSucceeded ? 'Succeeded' : 'Failed'}</span> : null}
      <div className="launch-block__info">
        <h3 className="launch-block__heading">Launch #{ flightNumber }</h3>
        <p className="launch-block__description">
          {rocket.rocket_name} in {moment.unix(unixLaunchDate).format('DD MMM, YYYY (H:mma)')}
        </p>
      </div>
      <img src={links.mission_patch || imageSource} alt="launch_patch" className="launch-block__patch" />
    </div>
  );
};

LaunchBlock.propTypes = {
  flight_number: PropTypes.number.isRequired,
  launch_date_unix: PropTypes.number.isRequired,
  launch_success: PropTypes.bool,
  links: PropTypes.shape({
    mission_patch: PropTypes.string,
  }).isRequired,
  rocket: PropTypes.shape({
    rocket_name: PropTypes.string.isRequired,
  }).isRequired,
};

LaunchBlock.defaultProps = {
  launch_success: false,
};

export default LaunchBlock;

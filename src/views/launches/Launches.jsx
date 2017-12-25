import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import LaunchBlock from './LaunchBlock.jsx';
import './launches.scss';

class Launches extends React.Component {
  constructor() {
    super();

    this.state = {
      isLatestLaunch: true,
    };
  }
  componentDidMount() {
    this.onLaunchesMount();
  }

  onLaunchesMount = async () => {
    if (Object.keys(this.props.launches.launchesData).length === 0) {
      this.props.requestLaunchesData();
    }
  }

  onLaunchesRadioChange = (event) => {
    this.props.toggleLaunchesMode();
  }

  onLaunchYearChange = (event) => {
    const newEnteredYear = event.target.value;

    this.props.changeLaunchYear(newEnteredYear);
  }

  onSubmit = (event) => {
    event.preventDefault();

    let params = this.props.launches.isPastLaunches ? '' : '/upcoming';

    params += `?launch_year=${this.props.launches.launchYear}`;
    this.props.requestLaunchesData(params);

    this.setState({
      isLatestLaunch: false,
    });
  }

  render() {
    const {
      isPastLaunches,
      launchesData,
      launchYear,
    } = this.props.launches;
    const { isLatestLaunch } = this.state;

    return (
      <div className="launches">
        <h3>Lauche control</h3>
        <form action="" onSubmit={this.onSubmit} className="launches__form">
          <label htmlFor="past-launches-radio" className="launches__label">
            I want to see the past (past launches)
            <input
              type="radio"
              id="past-launches-radio"
              name="launch-mode"
              value="latest"
              checked={isPastLaunches}
              onChange={this.onLaunchesRadioChange}
              className="launches__radio"
            />
          </label>
          <label htmlFor="upcoming-launches-radio" className="launches__label">
            I want to see the future (upcoming launches)
            <input
              type="radio"
              id="upcoming-launches-radio"
              name="launch-mode"
              value="upcoming"
              checked={!isPastLaunches}
              onChange={this.onLaunchesRadioChange}
              className="launches__radio"
            />
          </label>
          <label htmlFor="launch-year" className="launches__label">
            Enter Year
            <input
              type="text"
              id="launch-year"
              name="launch-year"
              value={launchYear}
              onChange={this.onLaunchYearChange}
              className="launches__input"
            />
          </label>
          <button type="submit" className="launches__submit">Submit</button>
        </form>
        <h2 className="launches__results-heading">{isLatestLaunch ? 'Latest Launch' : launchYear }</h2>
        <div className="launches__grid">
          {launchesData.map((launchData, index) => {
            const flightNumber = launchData.flight_number;
            const linkLocation = {
              pathname: `/launches/${flightNumber}`,
              state: { launchData },
            };

            return (
              <Link to={linkLocation} key={flightNumber} className="launches__link">
                <LaunchBlock {...launchData} />
              </Link>
            );
          })}
        </div>
      </div>
    );
  }
}

Launches.propTypes = {
  launches: PropTypes.shape({
    launchesData: PropTypes.arrayOf(
      PropTypes.shape({
        flight_number: PropTypes.number,
        details: PropTypes.string,
      }).isRequired,
    ).isRequired,
    isPastLaunches: PropTypes.bool.isRequired,
    launchYear: PropTypes.string,
  }).isRequired,
  requestLaunchesData: PropTypes.func.isRequired,
  toggleLaunchesMode: PropTypes.func.isRequired,
  changeLaunchYear: PropTypes.func.isRequired,
};

export default Launches;

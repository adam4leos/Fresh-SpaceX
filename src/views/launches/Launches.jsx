// @flow

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import LaunchBlock from './LaunchBlock.jsx';
import Spinner from './../../components/spinner/Spinner.jsx';
import './launches.scss';
import type {
  RequestLaunchesDataType,
  ToggleLaunchesModeType,
  ChangeLaunchYearType,
  LaunchesType,
} from '../../flowTypes/flowTypes';

type Props = {
  launches: LaunchesType,
  requestLaunchesData: RequestLaunchesDataType,
  toggleLaunchesMode: ToggleLaunchesModeType,
  changeLaunchYear: ChangeLaunchYearType,
}

type State = {
  isLatestLaunch: boolean,
}

class Launches extends Component<Props, State> {
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
    if (this.props.launches.launchesData.length === 0) {
      this.props.requestLaunchesData();
    }
  }

  onLaunchesRadioChange = (event: SyntheticInputEvent<HTMLInputElement>) => {
    this.props.toggleLaunchesMode();
  }

  onLaunchYearChange = (event: SyntheticInputEvent<HTMLInputElement>) => {
    const newEnteredYear: string = event.target.value.replace(/[^0-9.]/g, '');
    this.props.changeLaunchYear(newEnteredYear);
  }

  onSubmit = (event: SyntheticInputEvent<HTMLInputElement>) => {
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
      error,
    } = this.props.launches;
    const { isLatestLaunch } = this.state;

    return (
      <div className="launches">
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
        <h2 className="launches__results-heading">{isLatestLaunch ? 'Latest Launch' : `Year: ${launchYear}` }</h2>
        <div className="launches__grid">
          {(() => {
            if (error !== undefined) {
              return <div>{error.toString()}</div>;
            } else if (launchesData.length === 0) {
              return <Spinner />;
            }

            return launchesData.map((launchData, index) => {
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
            });
          })()}
        </div>
      </div>
    );
  }
}

export default Launches;

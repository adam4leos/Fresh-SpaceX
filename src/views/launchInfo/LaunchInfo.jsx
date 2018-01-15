import React from 'react';
import PropTypes from 'prop-types';
import ReactPlayer from 'react-player';
import moment from 'moment';
import './launchInfo.scss';

class LaunchInfo extends React.Component {
  constructor() {
    super();

    this.state = { isEnginesActive: false };
  }

  onVideoPlay = () => {
    this.setState({ isEnginesActive: true });
  }

  onVideoStop = () => {
    this.setState({ isEnginesActive: false });
  }

  render() {
    const {
      launch_year: launchYear,
      launch_success: isLaunchSucceeded,
      launch_date_unix: unixLaunchDate,
      flight_number: flightNumber,
      details,
      links,
      rocket,
    } = this.props;
    const {
      video_link: youtubeVideo,
      article_link: articleURL,
      mission_patch: missionPatch,
      reddit_campaign: redditCampaign,
    } = links;
    const formattedLaunchDateTime = moment.unix(unixLaunchDate).format('DD MMM, YYYY (H:mma)');

    return (
      <div className="launch-info">
        <h2 className="launch-info__heading">Flight #{flightNumber} ({isLaunchSucceeded ? 'Succeeded' : 'Failed'})</h2>
        <div className="launch-info__information">
          <div className="launch-info__description">
            <p className="launch-info__details">{details}</p>
            <p className="launch-info__rocket">{rocket.rocket_name}</p>
            <p className="launch-info__year">{launchYear}</p>
            <p className="launch-info__datetime">{formattedLaunchDateTime}</p>
            <div className="launch-info__links">
              <a href={redditCampaign} className="launch-info__link" target="_blank">Reddit Campaign</a>
              <a href={articleURL} className="launch-info__link" target="_blank">Detailed Article</a>
            </div>
          </div>
          <img src={missionPatch} alt="mission_patch" className="launch-info__patch" />
        </div>
        <div className="launch-info__video">
          <ReactPlayer
            url={youtubeVideo}
            onPlay={this.onVideoPlay}
            onPause={this.onVideoStop}
            onEnded={this.onVideoStop}
            controls
          />
          {/* TODO fancy engines animation */}
          <div className={`launch-info__engines ${this.state.isEnginesActive ? 'active' : ''}`}>
            <div className="launch-info__engine" />
            <div className="launch-info__engine" />
            <div className="launch-info__engine" />
          </div>
        </div>
      </div>
    );
  }
}

LaunchInfo.propTypes = {
  launch_year: PropTypes.string.isRequired,
  launch_success: PropTypes.bool.isRequired,
  flight_number: PropTypes.number.isRequired,
  launch_date_unix: PropTypes.number.isRequired,
  details: PropTypes.string.isRequired,
  links: PropTypes.shape({
    video_link: PropTypes.string,
    article_link: PropTypes.string,
    mission_patch: PropTypes.string,
    reddit_campaign: PropTypes.string,
  }).isRequired,
  rocket: PropTypes.shape({
    rocket_name: PropTypes.string.isRequired,
  }).isRequired,
};

export default LaunchInfo;

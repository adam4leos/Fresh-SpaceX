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
      details,
      links,
      rocket,
      launch_success: isLaunchSucceeded,
      launch_date_unix: unixLaunchDate,
      flight_number: flightNumber,
    } = this.props;
    const {
      video_link: youtubeVideo,
      article_link: articleURL,
      mission_patch: missionPatch,
      reddit_campaign: redditCampaign,
    } = links;
    const {
      first_stage: firstStage,
      second_stage: secondStage,
      rocket_name: rocketName,
    } = rocket;
    const formattedLaunchDateTime = moment.unix(unixLaunchDate).format('DD MMM, YYYY (H:mma)');

    return (
      <div className="launch-info">
        <h2 className="launch-info__heading">Launch #{flightNumber} ({isLaunchSucceeded ? 'Succeeded' : 'Failed'})</h2>
        <div className="launch-info__information">
          <div className="launch-info__description">
            <p className="launch-info__caption">{rocketName}, {formattedLaunchDateTime}</p>
            <p className="launch-info__details">{details}</p>
            <div className="launch-info__first-stage">
              {firstStage.cores.map(({
                reused,
                core_serial: coreSerial,
                land_success: isLandSucceeded,
                landing_type: landingType,
                landing_vehicle: landingVehicle,
              }) => (
                <div className="launch-info__core" key={coreSerial}>
                  <span>{reused ? 'Reused' : 'Not reused'}</span>
                  <span>{isLandSucceeded ? 'Land succeeded' : 'Not succeeded'}</span>
                  <span>{landingType}</span>
                  <span>{landingVehicle}</span>
                </div>
              ))}
            </div>
            <div className="launch-info__second-stage">
              {secondStage.payloads.map(({
                reused,
                orbit,
                customers,
                // TODO consider measurements switch
                payload_mass_kg: payloadMass,
                mass_returned_kg: returnedMass,
                payload_type: payloadType,
                payload_id: payloadID,
              }) => (
                <div className="launch-info__core" key={payloadID}>
                  <span>{reused ? 'Reused' : 'Not reused'}</span>
                  <span>{orbit}</span>
                  <span>{returnedMass}</span>
                  <span>{payloadMass}</span>
                  <span>{payloadType}</span>
                  {customers.map(customer => <span key={customer}>{customer}</span>)}
                </div>
              ))}
            </div>
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

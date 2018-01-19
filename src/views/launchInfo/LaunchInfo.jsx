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
              <div>First Stage</div>
              {firstStage.cores.map(({
                reused,
                core_serial: coreSerial,
                land_success: isLandSucceeded,
                landing_type: landingType,
                landing_vehicle: landingVehicle,
              }) => (
                <ul className="launch-info__core" key={coreSerial}>
                  <li>{reused ? 'Was' : 'Wasn\'t'}&nbsp;Reused</li>
                  <li>Land&nbsp;{isLandSucceeded ? '' : 'Not '}Succeeded</li>
                  <li>Landing Type - {landingType}</li>
                  <li>Landing Vehicle - {landingVehicle}</li>
                </ul>
              ))}
            </div>
            <div className="launch-info__second-stage">
              <div>Second Stage</div>
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
                <ul className="launch-info__core" key={payloadID}>
                  <li>{reused ? 'Was' : 'Wasn\'t'}&nbsp;Reused</li>
                  <li>Orbit {orbit}</li>
                  {returnedMass ? (<li>Returned Mass - {returnedMass}</li>) : null}
                  {payloadMass ? (<li>Payload Mass - {payloadMass}</li>) : null}
                  <li>Payload Type {payloadType}</li>
                  {customers.map(customer => <li key={customer}>Customer - {customer}</li>)}
                </ul>
              ))}
            </div>
            <div className="launch-info__links">
              {redditCampaign ? (<a href={redditCampaign} className="launch-info__link" target="_blank">Reddit Campaign</a>) : null}
              {articleURL ? (<a href={articleURL} className="launch-info__link" target="_blank">Detailed Article</a>) : null}
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

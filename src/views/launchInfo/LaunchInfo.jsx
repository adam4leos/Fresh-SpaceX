import React from 'react';
import PropTypes from 'prop-types';
import ReactPlayer from 'react-player';
import './launchInfo.scss';

const LaunchInfo = ({
  launch_year: launchYear,
  launch_success: isLaunchSuccessed,
  details,
  links,
  rocket,
}) => {
  const {
    video_link: youtubeVideo,
    article_link: articleURL,
    mission_patch: missionPatch,
    reddit_campaign: redditCampaign,
  } = links;

  return (
    <div className="launch-info">
      <h2 className="launch-info__heading">Heading ({isLaunchSuccessed ? 'Successed' : 'Unsuccessed'})</h2>
      <div className="launch-info__information">
        <div className="launch-info__description">
          <p className="launch-info__details">{details}</p>
          <p className="launch-info__rocket">{rocket.rocket_name}</p>
          <p className="launch-info__year">{launchYear}</p>
          <div className="launch-info__links">
            <a href={redditCampaign} className="launch-info__link" target="_blank">Reddit Campaign</a>
            <a href={articleURL} className="launch-info__link" target="_blank">Detailed Article</a>
          </div>
        </div>
        <img src={missionPatch} alt="mission_patch" className="launch-info__patch" />
      </div>
      <div className="launch-info__video">
        <ReactPlayer url={youtubeVideo} controls />
        <div className="launch-info__engines">
          <div className="launch-info__engine" />
          <div className="launch-info__engine" />
          <div className="launch-info__engine" />
        </div>
      </div>
    </div>
  );
};

// RocketInfo.propTypes = {
//   description: PropTypes.string.isRequired,
//   cost_per_launch: PropTypes.number.isRequired,
//   boosters: PropTypes.number.isRequired,
//   country: PropTypes.string.isRequired,
//   stages: PropTypes.number.isRequired,
//   first_flight: PropTypes.string.isRequired,
//   diameter: PropTypes.shape({
//     feet: PropTypes.number,
//     meters: PropTypes.number.isRequired,
//   }).isRequired,
//   height: PropTypes.shape({
//     feet: PropTypes.number,
//     meters: PropTypes.number.isRequired,
//   }).isRequired,
//   mass: PropTypes.shape({
//     lb: PropTypes.number.isRequired,
//     kg: PropTypes.number.isRequired,
//   }).isRequired,
//   engines: PropTypes.shape({
//     number: PropTypes.number.isRequired,
//     type: PropTypes.string.isRequired,
//     propellant_1: PropTypes.string.isRequired,
//     propellant_2: PropTypes.string.isRequired,
//   }).isRequired,
// };

export default LaunchInfo;

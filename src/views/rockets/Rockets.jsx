import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import RocketBlock from './RocketBlock.jsx';
import Spinner from './../../components/spinner/Spinner.jsx';
import './rockets.scss';

class Rockets extends React.Component {
  componentDidMount() {
    if (this.props.rocketsData.length === 0) {
      this.onRocketsMount();
    }
  }

  onRocketsMount = async () => {
    this.props.requestRocketsData();
  }

  render() {
    return (
      <div className="rockets">
        {this.props.rocketsData.length > 0 ? this.props.rocketsData.map((rocketInfo) => {
          const rocketID = rocketInfo.id;
          const linkLocation = {
            pathname: `/rockets/${rocketID}`,
            state: { rocketInfo },
          };

          return (
            <NavLink to={linkLocation} key={rocketID} className="rockets__link" activeClassName="rockets__link--active">
              <RocketBlock {...rocketInfo} />
            </NavLink>
          );
        }) : (<Spinner />)}
      </div>
    );
  }
}

Rockets.propTypes = {
  rocketsData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      active: PropTypes.bool.isRequired,
      cost_per_launch: PropTypes.number.isRequired,
      first_flight: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  requestRocketsData: PropTypes.func.isRequired,
};

export default Rockets;

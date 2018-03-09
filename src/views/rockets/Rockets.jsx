// @flow

import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import RocketBlock from './RocketBlock.jsx';
import Spinner from './../../components/spinner/Spinner.jsx';
import './rockets.scss';
import type { RocketsDataType, RequestRocketsDataType } from '../../flowTypes/flowTypes';

type Props = {
  rocketsData: RocketsDataType,
  requestRocketsData: RequestRocketsDataType, 
};

class Rockets extends Component<Props> {
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
        {this.props.rocketsData.length > 0 ?
          this.props.rocketsData.map((rocketInfo) => {
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

export default Rockets;

// @flow

import React from 'react';
import './rocketBlock.scss';
import type { RocketInfoType } from '../../flowTypes/flowTypes';

const RocketBlock = ({
  id,
  name,
  active: isRocketActive,
}: RocketInfoType) => {
  // TODO change those requires
  /* eslint-disable global-require */
  const imageSource: string = require(`../../img/${id}.jpg`);
  /* eslint-enable global-require */

  return (
    <div className="rocketBlock">
      <div className="rocketBlock__heading">{name} ({isRocketActive ? 'Inactive' : 'Active'})</div>
      <img src={imageSource} alt={name} className="rocketBlock__image" />
    </div>
  );
};

export default RocketBlock;

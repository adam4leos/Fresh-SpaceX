// @flow

import {
  RECEIVE_ROCKETS_DATA,
} from './../actions/actionTypes';
import type { StoreType, ActionType } from '../flowTypes/flowTypes';

function rocketsData(state: StoreType = {}, action: ActionType) {
  switch (action.type) {
    case RECEIVE_ROCKETS_DATA: {
      return action.rocketsData;
    }
    default:
      return state;
  }
}

export default rocketsData;

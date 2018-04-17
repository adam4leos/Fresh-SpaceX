// @flow

import {
  RECEIVE_ROCKETS_DATA,
  HANDLE_ROCKETS_DATA_FAIL,
} from './../actions/actionTypes';
import type { StoreType, ActionType } from '../flowTypes/flowTypes';

function rocketsData(state: StoreType = {}, action: ActionType) {
  switch (action.type) {
    case RECEIVE_ROCKETS_DATA: {
      return action.rocketsData;
    }
    case HANDLE_ROCKETS_DATA_FAIL: {
      return { error: action.error };
    }
    default:
      return state;
  }
}

export default rocketsData;

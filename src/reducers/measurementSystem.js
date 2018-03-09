// @flow

import {
  TOGGLE_METRIC_SYSTEM,
} from './../actions/actionTypes';
import type { StoreType, ActionType } from '../flowTypes/flowTypes';

function measurementSystem(state: StoreType = {}, action: ActionType) {
  switch (action.type) {
    case TOGGLE_METRIC_SYSTEM: {
      return {
        ...state,
        isMetricSystem: !state.isMetricSystem,
      };
    }
    default:
      return state;
  }
}

export default measurementSystem;

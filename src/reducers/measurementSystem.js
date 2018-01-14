import {
  TOGGLE_METRIC_SYSTEM,
} from './../actions/actionTypes';

function measurementSystem(state = {}, action) {
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

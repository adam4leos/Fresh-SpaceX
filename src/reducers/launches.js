import {
  RECEIVE_LAUNCHES_DATA,
  TOGGLE_LAUNCHES_MODE,
  CHANGE_LAUNCH_YEAR,
} from './../actions/actionTypes';

function launches(state = {}, action) {
  switch (action.type) {
    case RECEIVE_LAUNCHES_DATA: {
      const { launchesData } = action;
      const newLaunchesDataArray = Array.isArray(launchesData) ? launchesData : [launchesData];

      return {
        ...state,
        launchesData: newLaunchesDataArray,
      };
    }

    case TOGGLE_LAUNCHES_MODE: {
      return {
        ...state,
        isPastLaunches: !state.isPastLaunches,
      };
    }

    case CHANGE_LAUNCH_YEAR: {
      return {
        ...state,
        launchYear: action.launchYear,
      };
    }

    default:
      return state;
  }
}

export default launches;

import {
  RECEIVE_ROCKETS_DATA,
} from './../actions/actionTypes';

function rocketsData(state = {}, action) {
  switch (action.type) {
    case RECEIVE_ROCKETS_DATA: {
      return action.rocketsData;
    }
    default:
      return state;
  }
}

export default rocketsData;

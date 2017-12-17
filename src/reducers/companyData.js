import {
  RECEIVE_COMPANY_DATA,
} from './../actions/actionTypes';

function companyData(state = {}, action) {
  switch (action.type) {
    case RECEIVE_COMPANY_DATA: {
      return action.companyData;
    }
    default:
      return state;
  }
}

export default companyData;

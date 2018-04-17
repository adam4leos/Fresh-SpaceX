// @flow

import {
  RECEIVE_COMPANY_DATA,
  HANDLE_COMPANY_DATA_FAIL,
} from './../actions/actionTypes';
import type { StoreType, CompanyDataType } from '../flowTypes/flowTypes';

type ActionType = {
  type: string,
  error: Error,
  companyData: CompanyDataType,
}

function companyData(state: StoreType = {}, action: ActionType) {
  switch (action.type) {
    case RECEIVE_COMPANY_DATA: {
      return action.companyData;
    }
    case HANDLE_COMPANY_DATA_FAIL: {
      return { error: action.error };
    }
    default:
      return state;
  }
}

export default companyData;

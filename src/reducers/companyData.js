// @flow

import {
  RECEIVE_COMPANY_DATA,
} from './../actions/actionTypes';
import type { StoreType, CompanyDataType } from '../flowTypes/flowTypes';

type ActionType = {
  type: string,
  companyData: CompanyDataType,
}

function companyData(state: StoreType = {}, action: ActionType) {
  switch (action.type) {
    case RECEIVE_COMPANY_DATA: {
      return action.companyData;
    }
    default:
      return state;
  }
}

export default companyData;

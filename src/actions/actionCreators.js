import {
  REQUEST_COMPANY_DATA,
  RECEIVE_COMPANY_DATA,
  REQUEST_ROCKETS_DATA,
  RECEIVE_ROCKETS_DATA,
} from './actionTypes';

export function requestCompanyData() {
  return {
    type: REQUEST_COMPANY_DATA,
  };
}

export function receiveCompanyData(companyData) {
  return {
    type: RECEIVE_COMPANY_DATA,
    companyData,
  };
}

export function requestRocketsData() {
  return {
    type: REQUEST_ROCKETS_DATA,
  };
}

export function receiveRocketsData(rocketsData) {
  return {
    type: RECEIVE_ROCKETS_DATA,
    rocketsData,
  };
}

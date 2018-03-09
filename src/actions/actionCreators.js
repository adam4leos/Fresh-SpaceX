// @flow

import {
  REQUEST_COMPANY_DATA,
  RECEIVE_COMPANY_DATA,
  REQUEST_ROCKETS_DATA,
  RECEIVE_ROCKETS_DATA,
  REQUEST_LAUNCHES_DATA,
  RECEIVE_LAUNCHES_DATA,
  TOGGLE_LAUNCHES_MODE,
  CHANGE_LAUNCH_YEAR,
  TOGGLE_METRIC_SYSTEM,
} from './actionTypes';

import type { RequestCompanyDataType } from '../flowTypes/flowTypes';

export function requestCompanyData(): RequestCompanyDataType {
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

export function requestLaunchesData(params) {
  return {
    type: REQUEST_LAUNCHES_DATA,
    params,
  };
}

export function receiveLaunchesData(launchesData) {
  return {
    type: RECEIVE_LAUNCHES_DATA,
    launchesData,
  };
}

export function toggleLaunchesMode() {
  return {
    type: TOGGLE_LAUNCHES_MODE,
  };
}

export function changeLaunchYear(launchYear) {
  return {
    type: CHANGE_LAUNCH_YEAR,
    launchYear,
  };
}

export function toggleMetricSystem() {
  return {
    type: TOGGLE_METRIC_SYSTEM,
  };
}

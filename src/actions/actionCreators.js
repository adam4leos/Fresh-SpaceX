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
import type {
  CompanyDataType,
  RocketsDataType,
  LaunchDataType,
} from '../flowTypes/flowTypes';

export function requestCompanyData() {
  return {
    type: REQUEST_COMPANY_DATA,
  };
}

export function receiveCompanyData(companyData: CompanyDataType) {
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

export function receiveRocketsData(rocketsData: RocketsDataType) {
  return {
    type: RECEIVE_ROCKETS_DATA,
    rocketsData,
  };
}

export function requestLaunchesData(params: string) {
  return {
    type: REQUEST_LAUNCHES_DATA,
    params,
  };
}

export function receiveLaunchesData(launchesData: LaunchDataType) {
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

export function changeLaunchYear(launchYear: string = '2017') {
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

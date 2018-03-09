// @flow

import { call, put, takeLatest } from 'redux-saga/effects';
import type { Saga } from 'redux-saga';
import { receiveLaunchesData } from './../actions/actionCreators';
import { REQUEST_LAUNCHES_DATA } from './../actions/actionTypes';
import FetchData from './../utils/FetchData';

function* requestLaunchesData({ params = '/latest' }): Saga<void> {
  const urlParams = `launches${params}`;

  try {
    const launchesData = yield call(FetchData.bind(null, urlParams));
    yield put(receiveLaunchesData(launchesData));
  } catch (error) {
    console.log(error);
  }
}

const launchesDataSagas = [
  takeLatest(REQUEST_LAUNCHES_DATA, requestLaunchesData),
];

export default launchesDataSagas;

// @flow

import { call, put, takeLatest } from 'redux-saga/effects';
import type { Saga } from 'redux-saga';
import { receiveCompanyData } from './../actions/actionCreators';
import { REQUEST_COMPANY_DATA } from './../actions/actionTypes';
import FetchData from './../utils/FetchData';
import type { ActionType } from '../flowTypes/flowTypes';

function* requestCompanyData(action: ActionType): Saga<void> {
  try {
    const companyData = yield call(FetchData);
    yield put(receiveCompanyData(companyData));
  } catch (error) {
    console.log(error);
  }
}

const companyDataSagas = [
  takeLatest(REQUEST_COMPANY_DATA, requestCompanyData),
];

export default companyDataSagas;

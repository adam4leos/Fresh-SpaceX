// @flow

import { all } from 'redux-saga/effects';
import type { Saga } from 'redux-saga';
import companyDataSagas from './companyDataSagas';
import rocketsDataSagas from './rocketsDataSagas';
import launchesDataSagas from './launchesDataSagas';

export default function* rootSaga(): Saga<void> {
  yield all([
    ...companyDataSagas,
    ...rocketsDataSagas,
    ...launchesDataSagas,
  ]);
}

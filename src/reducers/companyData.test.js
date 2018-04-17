// TODO test errors here and in all ltests here

import companyData from './companyData';
import * as types from '../actions/actionTypes';

describe('company data reducer', () => {
  it('should return empty state', () => {
    expect(companyData(undefined, {})).toEqual({});
  });

  it('should handle RECEIVE_COMPANY_DATA', () => {
    const data = { ceo: 'Ilon Mask' };

    expect(companyData([], {
      type: types.RECEIVE_COMPANY_DATA,
      companyData: data,
    })).toEqual(data);
  });
});

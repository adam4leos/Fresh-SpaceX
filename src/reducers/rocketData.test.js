import rocketsData from './rocketsData';
import * as types from '../actions/actionTypes';

describe('company data reducer', () => {
  it('should return empty state', () => {
    expect(rocketsData(undefined, {})).toEqual({});
  });

  it('should handle RECEIVE_ROCKETS_DATA', () => {
    const data = { name: 'Falcon9' };

    expect(rocketsData([], {
      type: types.RECEIVE_ROCKETS_DATA,
      rocketsData: data,
    })).toEqual(data);
  });
});

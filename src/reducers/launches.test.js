import launches from './launches';
import * as types from '../actions/actionTypes';

describe('company data reducer', () => {
  it('should return empty state', () => {
    expect(launches(undefined, {})).toEqual({});
  });

  it('should handle RECEIVE_LAUNCHES_DATA', () => {
    const data = { launch_year: 2017 };

    expect(launches([], {
      type: types.RECEIVE_LAUNCHES_DATA,
      launchesData: data,
    })).toEqual({ launchesData: [data] });

    // check result for the array also
    expect(launches([], {
      type: types.RECEIVE_LAUNCHES_DATA,
      launchesData: [data, data],
    })).toEqual({ launchesData: [data, data] });
  });

  it('should handle TOGGLE_LAUNCHES_MODE', () => {
    expect(launches([], {
      type: types.TOGGLE_LAUNCHES_MODE,
    })).toEqual({ isPastLaunches: true });
  });

  it('should handle CHANGE_LAUNCH_YEAR', () => {
    expect(launches([], {
      type: types.CHANGE_LAUNCH_YEAR,
      launchYear: '2017',
    })).toEqual({ launchYear: '2017' });
  });
});

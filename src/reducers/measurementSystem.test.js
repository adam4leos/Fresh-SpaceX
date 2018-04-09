import measurementSystem from './measurementSystem';
import * as types from '../actions/actionTypes';

describe('company data reducer', () => {
  it('should return empty state', () => {
    expect(measurementSystem(undefined, {})).toEqual({});
  });

  it('should handle TOGGLE_METRIC_SYSTEM', () => {
    expect(measurementSystem([], {
      type: types.TOGGLE_METRIC_SYSTEM,
    })).toEqual({ isMetricSystem: true });
  });
});

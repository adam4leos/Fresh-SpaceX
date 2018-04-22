import mobileMenu from './mobileMenu';
import * as types from '../actions/actionTypes';

describe('company data reducer', () => {
  it('should return empty state', () => {
    expect(mobileMenu(undefined, {})).toEqual({});
  });

  it('should handle TOGGLE_METRIC_SYSTEM', () => {
    expect(mobileMenu([], {
      type: types.TOGGLE_MOBILE_MENU_ACTIVITY,
    })).toEqual({ isMobileMenuActive: true });
  });
});

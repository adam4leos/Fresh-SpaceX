// @flow

import {
  TOGGLE_MOBILE_MENU_ACTIVITY,
} from './../actions/actionTypes';
import type { StoreType, ActionType } from '../flowTypes/flowTypes';

function mobileMenu(state: StoreType = {}, action: ActionType) {
  switch (action.type) {
    case TOGGLE_MOBILE_MENU_ACTIVITY: {
      return {
        ...state,
        isMobileMenuActive: !state.isMobileMenuActive,
      };
    }
    default:
      return state;
  }
}

export default mobileMenu;

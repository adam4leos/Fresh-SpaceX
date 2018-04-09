import * as actions from './actionCreators';
import * as types from './actionTypes';

describe('testing actions', () => {
  it('should create an action to toggle metric system', () => {
    const expectedAction = {
      type: types.TOGGLE_METRIC_SYSTEM,
    };

    expect(actions.toggleMetricSystem()).toEqual(expectedAction);
  });

  it('should create an action to changing launch year', () => {
    const expectedAction = {
      type: types.CHANGE_LAUNCH_YEAR,
      launchYear: '2017',
    };

    expect(actions.changeLaunchYear('2017')).toEqual(expectedAction);
    // also checking for an call w\0 arguments
    expect(actions.changeLaunchYear()).toEqual(expectedAction);
  });

  it('should create an action to toggle lauch mode', () => {
    const expectedAction = {
      type: types.TOGGLE_LAUNCHES_MODE,
    };

    expect(actions.toggleLaunchesMode()).toEqual(expectedAction);
  });

  it('should create an action to request company data', () => {
    const expectedAction = {
      type: types.REQUEST_COMPANY_DATA,
    };

    expect(actions.requestCompanyData()).toEqual(expectedAction);
  });

  it('should create an action to receive company data', () => {
    const companyData = {
      name: 'SpaceX',
    };
    const expectedAction = {
      type: types.RECEIVE_COMPANY_DATA,
      companyData,
    };

    expect(actions.receiveCompanyData(companyData)).toEqual(expectedAction);
  });

  it('should create an action to request rocket data', () => {
    const expectedAction = {
      type: types.REQUEST_ROCKETS_DATA,
    };

    expect(actions.requestRocketsData()).toEqual(expectedAction);
  });

  it('should create an action to receive rocket data', () => {
    const rocketsData = {
      name: 'Falcon9',
    };
    const expectedAction = {
      type: types.RECEIVE_ROCKETS_DATA,
      rocketsData,
    };

    expect(actions.receiveRocketsData(rocketsData)).toEqual(expectedAction);
  });

  it('should create an action to request launches data', () => {
    const params = '?launch_year=2017';
    const expectedAction = {
      type: types.REQUEST_LAUNCHES_DATA,
      params,
    };

    expect(actions.requestLaunchesData(params)).toEqual(expectedAction);
  });

  it('should create an action to receive launches data', () => {
    const launchesData = {
      flight_number: 4,
    };
    const expectedAction = {
      type: types.RECEIVE_LAUNCHES_DATA,
      launchesData,
    };

    expect(actions.receiveLaunchesData(launchesData)).toEqual(expectedAction);
  });
});

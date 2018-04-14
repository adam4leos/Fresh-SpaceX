import React from 'react';
import Launches from './Launches.jsx';

describe('Testing launches component', () => {
  const requestLaunchesDataMock = jest.fn();
  const toggleLaunchesModeMock = jest.fn();
  const defaultProps = {
    launches: {
      launchesData: [],
      isPastLaunches: true,
      launchYear: '2018',
    },
    toggleLaunchesMode: toggleLaunchesModeMock,
    requestLaunchesData: requestLaunchesDataMock,
  };

  test('Launches is matching snapshot', () => {
    const component = shallow(<Launches {...defaultProps} />);

    expect(component).toMatchSnapshot();
  });

  test('Laucnhes mode toggling', () => {
    const component = shallow(<Launches {...defaultProps} />);

    expect(component.find('.launches__radio')).toHaveLength(2);
    expect(component.find('#past-launches-radio').props().checked).toEqual(true);
    expect(component.find('#upcoming-launches-radio').props().checked).toEqual(false);

    component.find('#upcoming-launches-radio').simulate('change');
    expect(toggleLaunchesModeMock.mock.calls.length).toEqual(1);

    expect(component).toMatchSnapshot();
  });

  test('Laucnhes year changing', () => {
    const component = shallow(<Launches {...defaultProps} />);

    expect(component.find('[name="launch-year"]')).toHaveLength(1);
  });
});

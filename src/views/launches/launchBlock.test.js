import React from 'react';
import LaunchBlock from './LaunchBlock.jsx';

describe('Testing LaunchBlock component', () => {
  const defaultProps = {
    flight_number: 1,
    launch_date_unix: 1523695214905,
    launch_success: true,
    rocket: {
      rocket_name: 'galcon',
    },
    links: {
      mission_patch: '123',
    },
  };

  test('LaunchBlock is matching snapshot', () => {
    const component = shallow(<LaunchBlock {...defaultProps} />);

    expect(component).toMatchSnapshot();
  });

  test('LaunchBlock properly working with empty links object (no mission patch)', () => {
    const modifiedProps = { ...defaultProps, links: {} };
    const component = shallow(<LaunchBlock {...modifiedProps} />);

    expect(component).toMatchSnapshot();
  });

  test('LaunchBlock properly working with "true", "false" & "null" launch_success', () => {
    const modifiedPropsNull = { ...defaultProps, launch_success: null };
    const modifiedPropsTrue = { ...defaultProps, launch_success: true };
    const modifiedPropsFalse = { ...defaultProps, launch_success: false };
    const componentWithNullSuccess = shallow(<LaunchBlock {...modifiedPropsNull} />);
    const componentWithTrueSuccess = shallow(<LaunchBlock {...modifiedPropsTrue} />);
    const componentWithFalseSuccess = shallow(<LaunchBlock {...modifiedPropsFalse} />);


    expect(componentWithNullSuccess).toMatchSnapshot();
    expect(componentWithTrueSuccess).toMatchSnapshot();
    expect(componentWithFalseSuccess).toMatchSnapshot();
  });
});

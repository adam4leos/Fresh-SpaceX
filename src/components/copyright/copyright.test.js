import React from 'react';
import Copyright from './Copyright.jsx';

describe('testing copyright component', () => {
  test('Copyright is fine', () => {
    const component = shallow(<Copyright />);

    expect(component).toMatchSnapshot();
  });
});

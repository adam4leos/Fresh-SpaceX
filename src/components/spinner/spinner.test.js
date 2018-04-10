import React from 'react';
import Spinner from './Spinner.jsx';

test('Spinner is matching snapshot', () => {
  expect(shallow(<Spinner />)).toMatchSnapshot();
});

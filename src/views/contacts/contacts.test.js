import React from 'react';
import Contacts from './Contacts.jsx';

test('Contacts is matching snapshot', () => {
  expect(shallow(<Contacts />)).toMatchSnapshot();
});

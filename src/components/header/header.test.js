import React from 'react';
import Header from './Header.jsx';

describe('testing header component', () => {
  test('Header is matching snapshot', () => {
    const component = shallow(<Header />);

    expect(component).toMatchSnapshot();
  });

  test('Hamburger events working', () => {
    const component = shallow(<Header />);

    expect(component.find('.header__hamburger')).toHaveLength(1);
    expect(component.find('.header__hamburger').hasClass('active')).toEqual(false);

    component.find('.header__hamburger').simulate('click');
    expect(component.find('.header__hamburger').hasClass('active')).toEqual(true);
    expect(component.find('.header__hamburger')).toMatchSnapshot();

    component.find('.header__hamburger').simulate('keyUp');
    expect(component.find('.header__hamburger').hasClass('active')).toEqual(false);
    expect(component).toMatchSnapshot();
  });
});

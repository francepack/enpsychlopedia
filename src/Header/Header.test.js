import React from 'react';
import Header from './Header';
import { shallow } from 'enzyme';

describe('Header', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow (
      <Header />
    )
  });

  it ('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
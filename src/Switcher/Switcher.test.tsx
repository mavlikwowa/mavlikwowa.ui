/* Libraries */
import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import toJson from 'enzyme-to-json';

/* Components */
import Switcher from './index';

/** Setups */
const setUp = () => {
  /* Component */
  const wrapper = shallow(<Switcher />);
  return { wrapper };
};

/* Tests */
describe('Test component Switcher', () => {
  let wrapper: ShallowWrapper;

  beforeEach(() => {
    ({ wrapper } = setUp());
  });

  afterEach(() => {
    if (!wrapper) return;
    wrapper.unmount();
  });

  it('should render a component', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('shouldn`t has a child', () => {
    expect(wrapper.prop('hasChildren')).toBeFalsy();
  });
});

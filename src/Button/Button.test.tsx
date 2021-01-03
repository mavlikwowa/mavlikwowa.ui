/* Libraries */
import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import toJson from 'enzyme-to-json';

/* Components */
import Button from './index';

/* Interfaces */
import { ButtonProps, ButtonSize } from './interfaces';

/** Setups */
const setUp = () => {
  /* A test`s data */
  const props: ButtonProps = {
    buttonSize: ButtonSize.SMALL,
    children: 'Button text',
  };
  /* Component */
  const wrapper = shallow(<Button {...props}>{props.children}</Button>);
  return { props, wrapper };
};

/* Tests */
describe('Test component Button', () => {
  let wrapper: ShallowWrapper;
  let props: ButtonProps;

  beforeEach(() => {
    ({ wrapper, props } = setUp());
  });

  afterEach(() => {
    if (!wrapper) return;
    wrapper.unmount();
  });

  it('should render a component', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should find a text of button', () => {
    expect(wrapper.text()).toBe(props.children);
  });
});

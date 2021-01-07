/* Libraries */
import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import toJson from 'enzyme-to-json';

/* Components */
import Tag from './index';

/* Interfaces */
import { TagProps } from './interface';

/** Setups */
const setUp = () => {
  /* A test`s data */
  const props: TagProps = {
    color: '#D0FFC9',
    border: '#ADD900',
    background: '#129900',
    width: '110px',
    height: '35px',
    children: 'Tag text',
  };
  /* Component */
  const wrapper = shallow(<Tag {...props}>{props.children}</Tag>);
  return { props, wrapper };
};

/* Tests */
describe('Test component Tag', () => {
  let wrapper: ShallowWrapper;
  let props: TagProps;

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

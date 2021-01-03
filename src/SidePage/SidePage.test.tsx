/* Libraries */
import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import toJson from 'enzyme-to-json';

/* Components */
import SidePage from './index';
import CloseIcon from '../Icons/CloseIcon';

/* Interfaces */
import { SidePageProps } from './interfaces';

/* Constants */
import { ANIMATION_DURATION } from './const';

/* A mock for onCloseClick */
const mockCloseClick = jest.fn();

/** Setups */
const setUp = () => {
  /* A test`s data */
  const props: SidePageProps = {
    show: true,
    onCloseClick: mockCloseClick,
    children: 'SidePage text',
  };
  /* Component */
  const wrapper = shallow(<SidePage {...props}>{props.children}</SidePage>);
  return { props, wrapper };
};

/* Tests */
describe('Test component SidePage', () => {
  let wrapper: ShallowWrapper;
  let props: SidePageProps;

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

  it('should find a child text', () => {
    expect(wrapper.childAt(1).text()).toBe(props.children);
  });

  it('should call a mock function', () => {
    wrapper.find(CloseIcon).simulate('click');
    setTimeout(() => {
      expect(mockCloseClick).toHaveBeenCalled();
    }, ANIMATION_DURATION);
  });
});

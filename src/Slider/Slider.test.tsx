/* Libraries */
import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';

/* Components */
import Slider from './index';
import { StyledSliderContent } from './style';

/* Interfaces */
import { SliderProps } from './interfaces';

const data: React.ReactNode[] = [
  <div>Hi!</div>,
  <div>I`m</div>,
  <div>VOVA</div>,
  <div>!</div>,
];

/** Setups */
const setUp = () => {
  /* A test`s data */
  const props: SliderProps = {
    data,
  };
  /* Component */
  const wrapper = shallow(<Slider {...props} />);
  return { wrapper };
};

/* Tests */
describe('Test component Slider', () => {
  let wrapper: ShallowWrapper;

  beforeEach(() => {
    ({ wrapper } = setUp());
  });

  afterEach(() => {
    if (!wrapper) return;
    wrapper.unmount();
  });

  it('should render a component', () => {
    // @todo: key ignore
    expect(wrapper).toMatchSnapshot();
  });

  it('should find a correct text in one child', () => {
    expect(wrapper.find(StyledSliderContent).childAt(0).text()).toBe('Hi!');
  });
});

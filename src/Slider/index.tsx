/* Libraries */
import React, { useState, useEffect, useRef, RefObject } from 'react';
import { v4 as uuidv4 } from 'uuid';

/* Interfaces */
import { SliderProps } from './interfaces';

/* Styled components */
import {
  StyledSlider,
  StyledSliderContent,
  StyledSliderContainer,
} from './style';

/* Components */
import ArrowIcon from '../Icons/ArrowIcon';

const Slider: React.FC<SliderProps> = ({
  data,
  width,
  height,
}: SliderProps) => {
  // A state of content width. We must calculate it because user can create width in %
  const [cw, setCw] = useState<number>(0);
  // Ref of Content
  const contentRef: RefObject<HTMLDivElement> | null = useRef(null);
  // We should get ref parameters only with a function (nexjs feature)
  const getContentWidth = () => {
    if (contentRef?.current) setCw(contentRef?.current?.offsetWidth);
    return 0;
  };
  // Calculates width after render
  useEffect(() => {
    getContentWidth();
  }, [contentRef]);

  // A Number of current slide. Must start from 1 because it`s used in a calculating style
  const [slideAmount, setSlideAmount] = useState<number>(1);
  // Switches to the previous slide
  const prevSlide = () => {
    if (slideAmount >= 1) setSlideAmount(-data.length + 1);
    setSlideAmount((amout) => amout + 1);
  };
  // Switches to the next slide
  const nextSilde = () => {
    if (slideAmount <= -data.length + 2) setSlideAmount(2);
    setSlideAmount((amout) => amout - 1);
  };
  return (
    <StyledSlider data={data} width={width} height={height}>
      <div role="none" onClick={prevSlide}>
        <ArrowIcon />
      </div>
      <StyledSliderContainer ref={contentRef} width={width} height={height}>
        <StyledSliderContent
          slideAmount={slideAmount}
          width={cw}
          height={height}
        >
          {data?.length > 0 &&
            data.map((item: React.ReactNode) => {
              return <div key={uuidv4()}>{item}</div>;
            })}
        </StyledSliderContent>
      </StyledSliderContainer>
      <div role="none" onClick={nextSilde}>
        <ArrowIcon />
      </div>
    </StyledSlider>
  );
};

export default Slider;

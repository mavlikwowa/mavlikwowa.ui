/* Libraries */
import React, { useState, useEffect, useRef, RefObject } from 'react';

/* Interfaces */
import { SliderProps } from './interfaces';

/* Styled components */
import {
  StyledSlider,
  StyledSliderContent,
  StyledSliderContainer,
  StyledSliderWrapper,
  StyledScrollBar,
} from './style';

/* Components */
import ArrowIcon from '../Icons/ArrowIcon';

/* Hooks */
import { useWindowSize } from '../hooks/useWindowSize';

const Slider: React.FC<SliderProps> = ({
  data,
  width,
  height,
  arrowsColor,
}: SliderProps) => {
  const size = useWindowSize();
  // A sensitivity of swipe
  const SWIPE_AMOUNT = 50;
  // A state of content width. We must calculate it because user can create width in %
  const [cw, setCw] = useState<number>(0);
  // Состояние при начале нажатия на экран
  const [touchStart, setTouchStart] = useState<number>(0);
  // Состояние при завершения нажатия на экран
  const [touchEnd, setTouchEnd] = useState<number>(0);
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
  }, [size, contentRef]);

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
  // An event calls after start of swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };
  // An event calls during swipe
  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };
  // Calculates swipe`s results
  const handleTouchEnd = () => {
    if (touchStart - touchEnd > SWIPE_AMOUNT) {
      nextSilde();
    }
    if (touchStart - touchEnd < -SWIPE_AMOUNT) {
      prevSlide();
    }
  };
  return (
    <StyledSliderWrapper width={width}>
      <StyledSlider width={width} height={height} arrowsColor={arrowsColor}>
        <div role="none" data-arrow-left="" onClick={prevSlide}>
          <ArrowIcon />
        </div>
        <StyledSliderContainer
          ref={contentRef}
          width={width}
          height={height}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <StyledSliderContent
            slideAmount={slideAmount}
            width={cw}
            height={height}
          >
            {data?.length > 0 &&
              data.map((item: React.ReactNode, index: number) => {
                // It`s necessary - if I use uuid, the component will update after every touch events
                // eslint-disable-next-line
                return <div key={index}>{item}</div>;
              })}
          </StyledSliderContent>
        </StyledSliderContainer>
        <div role="none" data-arrow-right="" onClick={nextSilde}>
          <ArrowIcon />
        </div>
      </StyledSlider>
      <StyledScrollBar slideAmount={slideAmount} arrowsColor={arrowsColor}>
        {data?.length > 0 && Array(data.length).fill(<div />)}
      </StyledScrollBar>
    </StyledSliderWrapper>
  );
};

export default React.memo(Slider);

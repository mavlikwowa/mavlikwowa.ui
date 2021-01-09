/* Libraries */
import React, { useState } from 'react';

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

const Slider: React.FC<SliderProps> = ({ data }: SliderProps) => {
  const [slideAmount, setSlideAmount] = useState<number>(1);
  const nextSilde = () => {
    if (slideAmount === -1) setSlideAmount(data.length - 1);
    setSlideAmount((amout) => amout - 1);
  };
  const prevSlide = () => {
    if (slideAmount === 1) setSlideAmount(-data.length + 1);
    setSlideAmount((amout) => amout + 1);
  };
  return (
    <StyledSlider>
      <div role="button" tabIndex={0} onKeyDown={prevSlide} onClick={prevSlide}>
        <ArrowIcon />
      </div>
      <StyledSliderContainer>
        <StyledSliderContent slideAmount={slideAmount}>
          {data?.length > 0 &&
            data.map((item: React.ReactNode) => {
              return (
                // @todo: uuid
                <div key={Math.random()}>{item}</div>
              );
            })}
        </StyledSliderContent>
      </StyledSliderContainer>
      <div role="button" tabIndex={0} onKeyDown={nextSilde} onClick={nextSilde}>
        <ArrowIcon />
      </div>
    </StyledSlider>
  );
};

export default Slider;

/* Libraries */
import styled from '@emotion/styled';

/* Interfaces */
import {
  StyledSliderContentProps,
  SliderProps,
  StyledSliderContainerProps,
} from './interfaces';

export const StyledSlider = styled.div<SliderProps>`
  ${({ width, height }: SliderProps) => {
    return `
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: ${width || '150px'};
      height: ${height || '50px'};
      > div:first-of-type {
        transform: rotate(270deg);
        cursor: pointer;
        outline: none;
      }
      > div:last-of-type {
        transform: rotate(90deg);
        cursor: pointer;
        outline: none;
      }    
    `;
  }}
`;

export const StyledSliderContainer = styled.div<StyledSliderContainerProps>`
  ${({ width, height }: StyledSliderContainerProps) => {
    return `
    display: flex;
    width: ${width || '150px'};
    height: ${height || '50px'};
    justify-content: center;
    align-items: center;
    overflow-x: hidden;
    position: relative;
  `;
  }}
`;

export const StyledSliderContent = styled.div<StyledSliderContentProps>`
  ${({ slideAmount, width, height }: StyledSliderContentProps) => {
    return `
      transform: translateX(${slideAmount * width}px);
      transition: all 1s;
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      left: -${width}px;
      > div {
        width: ${width}px;
        height: ${height || '50px'};
        display: flex;
        justify-content: center;
        align-items: center;
      }
    `;
  }}
`;

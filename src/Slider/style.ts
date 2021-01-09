/* Libraries */
import styled from '@emotion/styled';

/* Interfaces */
import { StyledSliderContentProps } from './interfaces';

export const StyledSlider = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 420px;
  height: 240px;
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

export const StyledSliderContainer = styled.div`
  display: flex;
  border: 1px solid;
  width: 360px;
  height: 200px;
  justify-content: center;
  align-items: center;
  overflow-x: hidden;
`;

export const StyledSliderContent = styled.div<StyledSliderContentProps>`
  ${({ slideAmount }: StyledSliderContentProps) => {
    return `
      transform: translateX(${slideAmount * 360}px);
      transition: all 1s;
      display: flex;
      justify-content: center;
      align-items: center;
      > div {
        width: 360px;
        height: 200px;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    `;
  }}
`;

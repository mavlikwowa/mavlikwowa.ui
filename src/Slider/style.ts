/* Libraries */
import styled from '@emotion/styled';

/* Interfaces */
import {
  StyledSliderContentProps,
  StyledSliderContainerProps,
  StyledScrollbarProps,
  StyledWrapperProps,
} from './interfaces';

export const StyledSlider = styled.div<StyledSliderContainerProps>`
  ${({ width, height, arrowsColor }: StyledSliderContainerProps) => {
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
        svg {
          fill: ${arrowsColor || 'black'};
        }
        @media (max-width: 940px) {
          display: none;
        }
      }
      > div:last-of-type {
        transform: rotate(90deg);
        cursor: pointer;
        outline: none;
        svg {
          fill: ${arrowsColor || 'black'};
        }
        @media (max-width: 940px) {
          display: none;
        }
      }
    `;
  }}
`;

export const StyledSliderContainer = styled.div<StyledSliderContainerProps>`
  ${({ width, height, arrowsColor }: StyledSliderContainerProps) => {
    return `
    display: flex;
    width: ${width || '150px'};
    height: ${height || '50px'};
    justify-content: center;
    align-items: center;
    overflow-x: hidden;
    position: relative;
    .arrow {
      transform: rotate(90deg);
      cursor: pointer;
      outline: none;
      svg {
        fill: ${arrowsColor || 'black'};
      }
      @media (max-width: 940px) {
        display: none;
      }
    }
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
      overflow: hidden;
    `;
  }}
`;

export const StyledSliderWrapper = styled.div<StyledWrapperProps>`
  ${({ width }: StyledWrapperProps) => {
    return `
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: ${width || '150px'};  
    `;
  }}
`;

export const StyledScrollBar = styled.span<StyledScrollbarProps>`
  ${({ arrowsColor, slideAmount }: StyledScrollbarProps) => {
    return `
      display: none;
      flex-direction: row;
      margin-top: 15px;
      div {
        border-radius: 50%;
        margin-right: 10px;
        width: 15px;
        height: 15px;
        border: 1px solid ${arrowsColor || 'black'};
      }
      div:nth-of-type(${Math.abs(slideAmount - 2)}) {
        background: ${arrowsColor || 'black'};
      }
      @media (max-width: 940px) {
        display: flex;
      }
    `;
  }}
`;

/* Libraries */
import styled from '@emotion/styled';

/* Interfaces */
import { SidePageContainerProps } from './interfaces';

/* Constants */
import { ANIMATION_DURATION } from './const';

/* A styled container */
export const SidePageContainer = styled.div<SidePageContainerProps>`
  ${({ show, background }: SidePageContainerProps) => {
    return `
      display: ${show ? 'block' : 'none'};
      position: fixed;
      top: 0;
      right: 0;
      height: 100%;
      background: ${background || 'white'};
      width: 30%;
      z-index: 999;
      padding: 32px 32px 32px 24px;
      box-sizing: border-box;
      box-shadow: 0 0 10px rgba(0,0,0,0.5);
      transform: translateX(100%);
      transition: transform ${ANIMATION_DURATION}ms;
      
      @media (max-width: 940px) {
        width: 100%;
      }
      &.open {
        transform: translateX(0);
        transition: transform ${ANIMATION_DURATION}ms;
      }
    `;
  }}
`;

/* A styled header */
export const SidePageHeader = styled.div`
  ${() => {
    return `
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 24px;
      
      > span: last-of-type {
        outline: none;
        cursor: pointer;
        transition: transform 0.5s;
        &:hover {
          transform: rotate(90deg);  
        }  
      }
    `;
  }}
`;

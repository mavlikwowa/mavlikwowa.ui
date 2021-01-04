/* Libraries */
import styled from '@emotion/styled';

/* Intefaces */
import { StyledSwitcherProps } from './interfaces';

export const StyledSwitcher = styled.label<StyledSwitcherProps>`
  ${({ hasChildren }: StyledSwitcherProps) => {
    return `
      display: inline-flex;
      cursor: pointer;
      width: 50px;
      height: 15px;
      background: grey;
      border-radius: 15px;
      align-items: center;
      outline: none;
      
      input {
        display: none;
        
        &:checked ~ span {
         background: ${hasChildren ? 'none' : 'white'};
         transform: translateX(70%);
         transition: transform 1s, background 1s;
         border: ${hasChildren ? 'none' : '1px solid darkgrey'};
        }
      }
      
      span {
        width: 30px;
        height: 30px;
        border-radius: 50%;
        background: ${hasChildren ? 'none' : 'black'};
        transform: translateX(0);
        transition: transform 1s, background 1s;
        border: ${hasChildren ? 'none' : '1px solid black'};
      }
    `;
  }}
`;

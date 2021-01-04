/* Libraries */
import styled from '@emotion/styled';

export const StyledSwitcher = styled.label`
  ${() => {
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
        outline: none;
        
        &:checked ~ span {
         background: green;
         transform: translateX(70%);
         transition: transform 1s, background 1s;
         outline: none;
        }
      }
      
      span {
        width: 30px;
        height: 30px;
        border-radius: 50%;
        background: red;
        transform: translateX(0);
        transition: transform 1s, background 1s;
        outline: none;
      }
    `;
  }}
`;

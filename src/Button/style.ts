/* Libraries */
import styled from '@emotion/styled';

/* Interfaces */
import { ButtonProps, ButtonSize } from './interfaces';

/* Styled component */
export const StyledButton = styled.button`
  ${({ width, background, buttonSize }: ButtonProps) => {
    // checks parametrs and creates sizes of button
    const createButtonSize = () => {
      const size = {
        width: 'auto',
        height: '50px',
      };
      if (width) {
        size.width = width;
      } else {
        switch (buttonSize) {
          case ButtonSize.SMALL:
            size.width = '150px';
            size.height = '50px';
            break;
          case ButtonSize.MEDIUM:
            size.width = '200px';
            size.height = '75px';
            break;
          case ButtonSize.LARGE:
            size.width = '250px';
            size.height = '100px';
            break;
          default:
            break;
        }
      }
      return size;
    };
    return `
      display: flex;
      align-items: baseline;
      justify-content: center;
      width: ${createButtonSize().width};
      height: ${createButtonSize().height};
      max-width: 250px;
      background: ${background || 'auto'};
    `;
  }}
`;

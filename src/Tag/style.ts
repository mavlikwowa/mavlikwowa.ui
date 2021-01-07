/* Libraries */
import styled from '@emotion/styled';
/* Interfaces */
import { TagProps } from './interface';

export const StyledTag = styled.div<TagProps>`
  ${({ background, border, width, height, color }: TagProps) => {
    return `
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background: ${background || 'white'};
    border: 1px solid ${border || 'grey'};
    width: ${width || '100px'};
    height: ${height || '50px'};
    color: ${color || 'black'};
    padding: 0 12px 0 12px;
    cursor: default;
  `;
  }}
`;

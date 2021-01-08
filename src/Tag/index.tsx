/* Libraries */
import React from 'react';
/* Interfaces */
import { TagProps } from './interface';
/* Styled Components */
import { StyledTag } from './style';

/* Styled components */
const Tag: React.FC<TagProps> = ({
  height,
  width,
  border,
  background,
  color,
  children,
  style,
}: TagProps) => {
  return (
    <StyledTag
      height={height}
      width={width}
      background={background}
      border={border}
      color={color}
      style={style}
    >
      {children}
    </StyledTag>
  );
};

export default Tag;

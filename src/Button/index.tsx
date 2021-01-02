/* Libraries */
import React from 'react';
/* Styles */
import { StyledButton } from './style';
/* Interfaces */
import { ButtonProps } from './interfaces';

/* Button component */
const Button: React.FC<ButtonProps> = (
  {
    isLoading,
    children,
    // should redefine this types, because React.HTMLProps<HTMLButtonElement> has incompatible similar types
    type = 'button',
    as = undefined,
    ...props
  }: ButtonProps,
  ...others
) => {
  return (
    <StyledButton {...props} {...others}>
      {isLoading ? 'Loading...' : children}
    </StyledButton>
  );
};

export default Button;

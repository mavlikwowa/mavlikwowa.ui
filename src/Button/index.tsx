/* Libraries */
import React from 'react';
/* Styles */
import { StyledButton } from './style';
/* Interfaces */
import { ButtonProps } from './interfaces';

/* Button component */
const Button: React.FC<ButtonProps> = ({
  onClick,
  width,
  isLoading,
  background,
  buttonSize,
  children,
}: ButtonProps) => {
  return (
    <StyledButton
      onClick={onClick}
      width={width}
      background={background}
      buttonSize={buttonSize}
    >
      {isLoading ? 'Loading' : children}
    </StyledButton>
  );
};

export default Button;

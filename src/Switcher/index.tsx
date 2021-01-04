/* Libraries */
import React from 'react';

/* Interfaces */
import { SwitcherProps } from './interfaces';

/* Styles */
import { StyledSwitcher } from './style';

const Switcher: React.FC<SwitcherProps> = ({ children }: SwitcherProps) => {
  return (
    <StyledSwitcher htmlFor="switcher">
      <input id="switcher" type="checkbox" />
      <span>{children || ''}</span>
    </StyledSwitcher>
  );
};

export default Switcher;

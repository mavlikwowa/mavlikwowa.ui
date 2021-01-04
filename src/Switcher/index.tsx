/* Libraries */
import React from 'react';

/* Interfaces */
import { SwitcherProps } from './interfaces';

/* Styles */
import { StyledSwitcher } from './style';

const Switcher: React.FC<SwitcherProps> = ({
  children,
  checked,
  onChange,
}: SwitcherProps) => {
  return (
    <StyledSwitcher hasChildren={!!children} htmlFor="switcher">
      <input
        id="switcher"
        type="checkbox"
        checked={checked}
        onChange={onChange}
      />
      <span>{children || ''}</span>
    </StyledSwitcher>
  );
};

export default Switcher;

/* Libraries */
import React from 'react';

/* Sizes of button */
export enum ButtonSize {
  SMALL = 'SMALL',
  MEDIUM = 'MEDIUM',
  LARGE = 'LARGE',
}

/* Props of Button component */
export interface ButtonProps extends React.HTMLProps<HTMLButtonElement> {
  /* onClick action */
  onClick: () => void;
  /* Settings of width (in spite of the size settings, changes the button`s width) */
  width?: string;
  /* Flag of loading (shows a preloader) */
  isLoading?: boolean;
  /* Settings of Background */
  background?: string;
  /* Size */
  buttonSize?: ButtonSize;
}

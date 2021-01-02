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
  /* Settings of width (in spite of the size settings, changes the button`s width) */
  width?: string;
  /* A flag of loading (shows a preloader) */
  isLoading?: boolean;
  /* Settings of Background */
  background?: string;
  /* Size */
  buttonSize?: ButtonSize;
  /* Color */
  borderColor?: string;
  /* A showing element */
  // children: React.ReactNode;
}

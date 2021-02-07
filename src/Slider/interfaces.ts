/* Slider`s props */
export interface SliderProps {
  /* Slider`s content */
  data: React.ReactNode[];
  /* A custom width */
  width?: string;
  /* A custom height */
  height?: string;
  /* Color of arrow */
  arrowsColor?: string;
}

export interface StyledSliderContentProps {
  slideAmount: number;
  // Important! We should calculate a content width
  width: number;
  height?: string;
}

export interface StyledSliderContainerProps {
  width?: string;
  height?: string;
  arrowsColor?: string;
}

export interface StyledScrollbarProps {
  arrowsColor?: string;
  slideAmount: number;
}

export interface StyledWrapperProps {
  width?: string;
}

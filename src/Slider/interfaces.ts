export interface SliderProps {
  data: React.ReactNode[];
  width?: string;
  height?: string;
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
}

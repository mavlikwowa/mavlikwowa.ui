export interface SwitcherProps extends React.HTMLProps<HTMLSpanElement> {
  hasChildren?: React.ReactNode;
  checked?: boolean;
}

export interface StyledSwitcherProps {
  hasChildren: boolean;
}

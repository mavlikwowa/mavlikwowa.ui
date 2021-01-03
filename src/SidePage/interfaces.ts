/* Libraries */
import React from 'react';

export interface SidePageProps
  extends React.HTMLProps<HTMLDivElement>,
    SidePageContainerProps {
  /* a header`s element */
  header?: React.ReactNode;
  /* An action after click on Close Icon */
  onCloseClick: () => void;
}

export interface SidePageContainerProps {
  /* a showing flag */
  show: boolean;
  /* a color of background */
  background?: string;
}

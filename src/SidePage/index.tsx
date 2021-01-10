/* Libraries */
import React, { useRef, RefObject, useEffect } from 'react';

/* Interfaces */
import { SidePageProps } from './interfaces';

/* Styled components */
import { SidePageContainer, SidePageHeader } from './style';

/* Components */
import CloseIcon from '../Icons/CloseIcon';

/* Constants */
import { ANIMATION_DURATION } from './const';

const SidePage: React.FC<SidePageProps> = ({
  show,
  background,
  children,
  header,
  onCloseClick,
}: SidePageProps) => {
  // A ref of container. Using for an animation
  const containerRef: RefObject<HTMLDivElement> | null = useRef(null);
  // Adds a class after component is showed
  useEffect(() => {
    if (!containerRef) return;
    if (containerRef?.current) containerRef.current.classList.add('open');
  }, [show]);
  // Closes the component after click
  const closeComponent = () => {
    if (!containerRef) return;
    if (containerRef?.current) containerRef.current.classList.remove('open');
    setTimeout(onCloseClick, ANIMATION_DURATION);
  };
  return (
    <SidePageContainer ref={containerRef} show={show} background={background}>
      <SidePageHeader>
        {header}
        <span role="none" onClick={closeComponent}>
          <CloseIcon />
        </span>
      </SidePageHeader>
      {children}
    </SidePageContainer>
  );
};

export default SidePage;

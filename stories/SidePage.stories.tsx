/* Libraries */
import React, { useState } from 'react';
import { Meta } from '@storybook/react';
/* Components */
import SidePage from '../src/SidePage';
import Button from '../src/Button';

const meta: Meta = {
  title: 'SidePage',
  component: SidePage,
};

export default meta;

export const Example: React.FC = () => {
  /* A state of showing component */
  const [show, setShow] = useState<boolean>(false);
  /**
   * calls after click on Close Icon
   */
  const onCloseClick = (): void => {
    setShow(false);
  };
  /**
   * calls after click on a button
   */
  const onShowClick = (): void => {
    setShow(true);
  };

  return (
    <>
      <Button onClick={onShowClick}>Show SidePage</Button>
      <SidePage show={show} header={<p>Header</p>} onCloseClick={onCloseClick}>
        Text
      </SidePage>
    </>
  );
};

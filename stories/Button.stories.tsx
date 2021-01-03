/* Libraries */
import React, { useState } from 'react';
import { Meta } from '@storybook/react';
/* Components */
import Button from '../src/Button';
/* Interfaces */
import { ButtonSize } from '../src/Button/interfaces';

const meta: Meta = {
  title: 'Button',
  component: Button,
};

export default meta;

export const Example: React.FC = () => {
  // A state of button`s loading
  const [loading, setLoading] = useState<boolean>(false);

  // A style of div`s stories
  const style = {
    marginBottom: '10px',
  };

  /**
   * calls after a button`s click
   * @useLoading <boolean> - changes laading state
   */
  const onButtonClick = (
    event: React.MouseEvent<HTMLButtonElement>,
    useLoading?: boolean
  ): void => {
    if (!event) return;
    if (useLoading) setLoading(true);
    // we need to show an animation
    setTimeout(() => {
      if (useLoading) setLoading(false);
      alert('I was clicked!');
    }, 100);
  };

  return (
    <>
      <div style={style}>
        <Button onClick={onButtonClick}>Simple button</Button>
      </div>
      <div style={style}>
        <Button
          buttonSize={ButtonSize.LARGE}
          onClick={onButtonClick}
          background="aqua"
          borderColor="blue"
        >
          Large button with background and color
        </Button>
      </div>
      <div style={style}>
        <Button buttonSize={ButtonSize.MEDIUM} onClick={onButtonClick}>
          Medium button
        </Button>
      </div>
      <div style={style}>
        <Button
          buttonSize={ButtonSize.SMALL}
          onClick={(e) => onButtonClick(e, true)}
          isLoading={loading}
        >
          Small button with loading
        </Button>
      </div>
    </>
  );
};

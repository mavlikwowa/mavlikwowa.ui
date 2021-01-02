import React, { useState } from 'react';
import { Meta, Story } from '@storybook/react';
import Button from '../src/Button';
import { ButtonSize } from '../src/Button/interfaces';

const meta: Meta = {
  title: 'mavlikwowa.ui',
  component: Button,
  argTypes: {
    children: {
      control: {
        type: 'text',
      },
    },
  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

// A style of div`s stories
const style = {
  marginBottom: '10px',
};

const Example: React.FC = () => {
  // A state of button`s loading
  const [loading, setLoading] = useState<boolean>(false);

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
          background="grey"
          borderColor="green"
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
          onClick={e => onButtonClick(e, true)}
          isLoading={loading}
        >
          Small button with loading
        </Button>
      </div>
    </>
  );
};

const Template: Story = () => <Example />;
// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const ButtonComponent = Template.bind({});

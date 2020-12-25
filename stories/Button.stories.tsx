import React from 'react';
import { Meta, Story } from '@storybook/react';
import { default as ButtonComponent } from '../src/Button';

const meta: Meta = {
  title: 'mavlikwowa.ui',
  component: ButtonComponent,
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

const Template: Story = args => <ButtonComponent {...args} />;

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Button = Template.bind({});

Button.args = {};

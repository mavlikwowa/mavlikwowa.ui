/* Libraries */
import React from 'react';
import { Meta } from '@storybook/react';
/* Components */
import Slider from '../src/Slider';

const meta: Meta = {
  title: 'Slider',
  component: Slider,
};

export default meta;

export const Example: React.FC = () => {
  // A style of div`s stories
  const style = {
    marginBottom: '10px',
    marginTop: '20px',
  };
  const data: React.ReactNode[] = [
    <div>Hi!</div>,
    <div>I`m</div>,
    <div>VOVA</div>,
    <div>!</div>,
  ];
  return (
    <>
      <div style={style}>A simple Slider</div>
      <Slider data={data} />
    </>
  );
};

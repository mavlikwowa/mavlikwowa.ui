/* Libraries */
import React from 'react';
import { Meta } from '@storybook/react';
/* Components */
import Tag from '../src/Tag';

const meta: Meta = {
  title: 'Tag',
  component: Tag,
};

export default meta;

export const Example: React.FC = () => {
  // A style of div`s stories
  const style = {
    marginBottom: '10px',
    marginTop: '20px',
  };
  return (
    <>
      <div style={style}>A simple tag</div>
      <Tag>Good morning!</Tag>
      <div style={style}>There`s a tag with props</div>
      <Tag
        background="#129900"
        border="#ADD900"
        color="#D0FFC9"
        width="110px"
        height="35px"
      >
        Good morning!
      </Tag>
    </>
  );
};

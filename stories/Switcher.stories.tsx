/* Libraries */
import React, { useState } from 'react';
import { Meta } from '@storybook/react';
/* Components */
import Switcher from '../src/Switcher';
import RussianFlagIcon from '../src/Icons/RussianFlagIcon';
import EnglishFlagIcon from '../src/Icons/EnglishFlagIcon';

const meta: Meta = {
  title: 'Switcher',
  component: Switcher,
};

export default meta;

export const Example: React.FC = () => {
  // state of switcher`s toggle
  const [clicked, setClicked] = useState<boolean>(false);
  // An action after click
  const clickOnSwitch = () => {
    setClicked(!clicked);
  };
  // A style of div`s stories
  const style = {
    marginBottom: '10px',
  };
  return (
    <>
      <div style={style}>A simple switcher without props and states</div>
      <Switcher />
      <div style={style}>{`Current language is: ${
        clicked ? 'English' : 'Russian'
      }`}</div>
      <Switcher checked={clicked} onChange={clickOnSwitch}>
        {clicked ? <EnglishFlagIcon /> : <RussianFlagIcon />}
      </Switcher>
    </>
  );
};

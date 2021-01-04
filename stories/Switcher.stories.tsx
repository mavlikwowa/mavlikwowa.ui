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
    console.log(clicked);
    setClicked(!clicked);
  };
  return (
    <>
      <Switcher onClick={clickOnSwitch}>
        {clicked ? <EnglishFlagIcon /> : <RussianFlagIcon />}
      </Switcher>
    </>
  );
};

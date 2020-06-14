import React, { useState } from 'react';
import { Display } from '../Display';
import { ButtonPanel } from '../ButtonPanel';
import { eventHandler } from '../../logic';

export const Calculator: React.FC = () => {
  const [state, setState] = useState({
    current: 0,
    total: 0,
    next: null,
  });
  console.log({ state });
  return (
    <>
      <Display value={state.current} />
      <ButtonPanel onClick={eventHandler(state, setState)} />
    </>
  );
};

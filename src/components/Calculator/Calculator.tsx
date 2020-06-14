import React, { useState } from 'react';
import { Display } from '../Display';
import { ButtonPanel } from '../ButtonPanel';
import { eventHandler } from '../../logic';

export const Calculator: React.FC = () => {
  const [state, setState] = useState({
    display: 0,
    total: 0,
    operation: null,
    clear: false,
    decimal: false,
  });

  return (
    <>
      <Display value={state.display} />
      <ButtonPanel onClick={eventHandler(state, setState)} />
    </>
  );
};

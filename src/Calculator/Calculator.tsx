import React from 'react';
import { Display } from '../Display';
import { ButtonPanel } from '../ButtonPanel';

export const Calculator: React.FC = () => {
  return (
    <div>
      <Display />
      <ButtonPanel />
    </div>
  );
};

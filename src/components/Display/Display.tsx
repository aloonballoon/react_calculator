import React from 'react';
import styles from './Display.css';

export const Display: React.FC<DisplayProps> = ({ value = 0 }) => {
  return (
    <div className={styles.display}>
      <p className={styles.value}>{value}</p>
    </div>
  );
};

interface DisplayProps {
  value: number;
}

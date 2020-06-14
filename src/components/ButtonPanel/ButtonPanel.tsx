import React from 'react';
import { Button } from '../Button';
import styles from './ButtonPanel.css';

export const ButtonPanel: React.FC<ButtonPanelProps> = ({ onClick }) => {
  return (
    <section>
      <div className={styles.row}>
        <Button value='AC' onClick={onClick} />
        <Button value='+/-' onClick={onClick} />
        <Button value='%' onClick={onClick} />
        <Button value='÷' onClick={onClick} orange />
      </div>
      <div className={styles.row}>
        <Button value={7} onClick={onClick} />
        <Button value={8} onClick={onClick} />
        <Button value={9} onClick={onClick} />
        <Button value='x' onClick={onClick} orange />
      </div>
      <div className={styles.row}>
        <Button value={4} onClick={onClick} />
        <Button value={5} onClick={onClick} />
        <Button value={6} onClick={onClick} />
        <Button value='-' onClick={onClick} orange />
      </div>
      <div className={styles.row}>
        <Button value={1} onClick={onClick} />
        <Button value={2} onClick={onClick} />
        <Button value={3} onClick={onClick} />
        <Button value='+' onClick={onClick} orange />
      </div>
      <div className={styles.row}>
        <Button value={0} onClick={onClick} wide />
        <Button value='.' onClick={onClick} />
        <Button value='=' onClick={onClick} orange />
      </div>
    </section>
  );
};

interface ButtonPanelProps {
  onClick: Function;
}

import React from 'react';
import { Button } from '../Button';
import styles from './ButtonPanel.css';

export const ButtonPanel: React.FC = () => {
  const values = [
    ['AC', '+/-', '%', '÷'],
    [7, 8, 9, 'x'],
  ];
  return (
    <section>
      <div className={styles.row}>
        <Button value='AC' onClick={(val) => console.log(val)} />
        <Button value='+/-' onClick={(val) => console.log(val)} />
        <Button value='%' onClick={(val) => console.log(val)} />
        <Button value='÷' onClick={(val) => console.log(val)} orange />
      </div>
      <div className={styles.row}>
        <Button value={7} onClick={(val) => console.log(val)} />
        <Button value={8} onClick={(val) => console.log(val)} />
        <Button value={9} onClick={(val) => console.log(val)} />
        <Button value='x' onClick={(val) => console.log(val)} orange />
      </div>
      <div className={styles.row}>
        <Button value={4} onClick={(val) => console.log(val)} />
        <Button value={5} onClick={(val) => console.log(val)} />
        <Button value={6} onClick={(val) => console.log(val)} />
        <Button value='-' onClick={(val) => console.log(val)} orange />
      </div>
      <div className={styles.row}>
        <Button value={3} onClick={(val) => console.log(val)} />
        <Button value={2} onClick={(val) => console.log(val)} />
        <Button value={1} onClick={(val) => console.log(val)} />
        <Button value='+' onClick={(val) => console.log(val)} orange />
      </div>
      <div className={styles.row}>
        <Button value={0} onClick={(val) => console.log(val)} wide />
        <Button value='.' onClick={(val) => console.log(val)} />
        <Button value='=' onClick={(val) => console.log(val)} orange />
      </div>
    </section>
  );
};

import React from 'react';
import styles from './Button.css';
import cn from 'classnames';

export const Button: React.FC<ButtonProps> = ({
  value,
  onClick,
  className = '',
  orange,
  wide,
}) => {
  return (
    <button
      className={cn(
        styles.button,
        className,
        orange ? styles.orange : '',
        wide ? styles.wide : ''
      )}
      onClick={() => onClick(value)}
    >
      <p>{value}</p>
    </button>
  );
};

interface ButtonProps {
  value: string | number;
  onClick: Function;
  className?: string;
  orange?: boolean;
  wide?: boolean;
}

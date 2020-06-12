import React, { useState } from 'react';

import { Alan } from './Test';

import styles from './Dropdown.css';

const Dropdown = ({ props, title }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.dropdown} {...props}>
      <p onClick={toggleDropdown}>{title}</p>
      <Alan />
    </div>
  );
};

export { Dropdown };

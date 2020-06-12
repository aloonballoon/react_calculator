import React from 'react';
import cn from 'classnames';

import styles from './NavBar.css';

const NavBar = ({ children, className = {}, dropdowns, ...props }) => (
  <div className={cn(styles.navbar, className)} {...props}>
    {children}
  </div>
);

export { NavBar };

import React from 'react';
import { ButtonProps } from './types';

import * as styles from './styles/button-root.css';
import classNames from 'classnames';

export const ButtonRoot: React.FC<ButtonProps> = ({ label, children, className, ...rest }) => {
  const classes = classNames(styles.buttonContainerStyle, className);
  return (
    <button className={styles.buttonContainerStyle} {...rest}>
      {label ?? children}
    </button>
  );
};

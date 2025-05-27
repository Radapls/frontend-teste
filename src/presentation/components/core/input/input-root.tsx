import * as styles from "./styles/input-root.css";
import classNames from "classnames";
import React from "react";
import { InputRootProps } from "./types";

export const InputRoot: React.FC<InputRootProps> = ({ children, className, ...rest }) => {
  const classes = classNames(styles.inputContainerStyles, className)
  return (
    <div className={classes} {...rest}>
      {children}
    </div>
  );
};

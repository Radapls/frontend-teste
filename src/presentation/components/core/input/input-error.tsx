import { FC } from "react";
import * as styles from "./styles/input-root.css";
import { InputErrorProps } from "./types";

export const InputError: FC<InputErrorProps> = ({ children, ...rest }) => {
  return (
    <span className={styles.inputErrorStyles} {...rest}>
      {children}
    </span>
  );
};

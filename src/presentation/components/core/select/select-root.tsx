import { FC } from "react";
import * as styles from "./styles/select-root.css";
import { SelectRootProps } from "./types";

export const SelectRoot: FC<SelectRootProps> = ({ children, ...rest }) => {
  return (
    <div className={styles.selectRootContainerStyles} {...rest}>
      {children}
    </div>
  );
};

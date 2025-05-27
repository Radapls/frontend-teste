import classNames from "classnames";
import { FC } from "react";
import * as styles from './styles/empty-state-root.css'
import { EmptyStateProps } from "./types";

export const EmptyStateRoot: FC<EmptyStateProps> = ({ children, className, ...rest }) => (
    <div className={classNames(styles.emptyStateRootStyles, className)} {...rest}>
      {children}
    </div>
);

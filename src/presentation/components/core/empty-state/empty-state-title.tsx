import classNames from "classnames";
import { EmptyStateProps } from "./types";
import * as styles from './styles/empty-state-root.css'
import { FC } from "react";

export const EmptyStateTitle: FC<EmptyStateProps> = ({ children, className, ...rest }) => (
    <h1 className={classNames(styles.emptyStateTitleStyle, className)} {...rest}>
      {children}
    </h1>
);
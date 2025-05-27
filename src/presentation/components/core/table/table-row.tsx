import classNames from 'classnames';
import { FC } from 'react';
import * as styles from './styles/table-root.css'

export const TableRow: FC<React.HTMLAttributes<HTMLTableRowElement>> = ({ children, className, ...rest }) => (
  <tr className={classNames(styles.row, className)} {...rest}>
    {children}
  </tr>
);

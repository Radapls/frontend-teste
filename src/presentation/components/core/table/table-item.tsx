import classNames from 'classnames';
import { FC } from 'react';
import * as styles from './styles/table-root.css'

export const TableItem: FC<React.HTMLAttributes<HTMLTableCellElement>> = ({ children, className, ...rest }) => (
  <td className={classNames(styles.cell, className)} {...rest}>
    {children}
  </td>
);

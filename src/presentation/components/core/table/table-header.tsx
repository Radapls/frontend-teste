import classNames from 'classnames';
import { FC } from 'react';
import * as styles from './styles/table-root.css'

export const TableHeader: FC<React.HTMLAttributes<HTMLTableCellElement>> = ({ children, className, ...rest }) => (
  <th className={classNames(styles.header, className)} {...rest}>
    {children}
  </th>
);


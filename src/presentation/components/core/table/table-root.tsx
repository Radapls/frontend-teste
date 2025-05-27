import { FC } from 'react';
import * as styles from './styles/table-root.css'
import classNames from 'classnames';

export const TableRoot: FC<React.HTMLAttributes<HTMLTableElement>> = ({ children, className, ...rest }) => (
  <div className={styles.tableContainer}>
    <table className={classNames(styles.tableRootStyle, className)} {...rest}>
      {children}
    </table>
  </div>
);

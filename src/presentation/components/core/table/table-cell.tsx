import classNames from 'classnames';
import { FC } from 'react';
import * as styles from './styles/table-root.css'


export const TableCell: FC<any> = (props) => {
  const { children, className, ...rest } = props;
  const classes = classNames(className);

  return (
    <td {...rest} className={classes}>
      {children}
    </td>
  );
};

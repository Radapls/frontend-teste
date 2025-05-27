import classNames from 'classnames';
import { FC } from 'react';
import * as styles from './styles/table-root.css'


export const TableBody: FC<any> = (props) => {
  const { children, className, ...rest } = props;
  const classes = classNames(className);

  return (
    <tbody {...rest} className={classNames(styles.body, className)} {...rest}>
      {children}
    </tbody>
  );
};

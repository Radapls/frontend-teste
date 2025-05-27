import { FC } from 'react';
import * as styles from './styles/card-root.css'
import { CardRootProps } from './types';


export const CardRoot: FC<CardRootProps> = ({children, ...rest}) => {
  return (
    <div className={styles.rootCardStyle} {...rest}>
    {children}
    </div>
  );
};

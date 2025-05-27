import React, { FC } from 'react'
import * as styles from './styles/card-root.css'
import { CardTitleProps } from './types'

export const CardTitle: FC<CardTitleProps> = ({children}) => {
  return (
    <div className={styles.cardContentStyle}>
    {children}
    </div>
  )
}

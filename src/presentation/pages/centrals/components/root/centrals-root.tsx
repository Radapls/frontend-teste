import React, { FC, HTMLAttributes } from 'react'
import * as styles from '../../../styles/main-page.css'

export const CentralsPageRoot: FC<HTMLAttributes<HTMLDivElement>> = ({children}) => {
  return (
 <section className={styles.mainPageContainerStyle}>
    {children}
 </section>
  )
}


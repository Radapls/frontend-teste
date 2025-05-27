import React, { FC } from 'react'
import { ToastRootProps } from './types'
import { toastRootContainerStyles } from './styles/toast-root.css'

export const ToastRoot: FC<ToastRootProps> = ({children}) => {
  return (
    <div className={toastRootContainerStyles}>
      {children}
    </div>
  )
}


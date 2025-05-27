import React, { FC } from 'react'
import { ToastTextProps } from './types'

export const ToastText: FC<ToastTextProps> = ({children}) => {
  return (
    <div>
      {children}
    </div>
  )
}


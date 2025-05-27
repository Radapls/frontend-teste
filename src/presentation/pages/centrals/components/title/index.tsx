import { Title } from '@components/core/title'
import React, { FC, HTMLAttributes } from 'react'

export const CentralsTitle: FC<HTMLAttributes<HTMLDivElement>> = ({children}) => {
  return (
    <Title.Root size="large">
        <Title.Text>{children}</Title.Text>
      </Title.Root>
  )
}

import React from 'react'
import { TitleProps } from '../../interfaces/title-props'

export const Title: React.FC<TitleProps> = ({ children }) => {
  return (
    <h1 className="py-4" style={{ fontFamily: 'Bebas Neue' }}>
      {children}
    </h1>
  )
}

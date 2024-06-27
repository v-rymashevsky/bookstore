import React from 'react'
import { MainProps } from '../../interfaces/main-props'

export const Main: React.FC<MainProps> = ({ children }) => {
  return (
    <main className='d-flex flex-column'>
      {children}
    </main>
  )
}

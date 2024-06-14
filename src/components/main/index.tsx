import React, { ReactNode } from 'react'

interface MainProps {
  children: ReactNode;
}

export const Main: React.FC<MainProps> = ({ children }) => {
  return (
    <main className='d-flex flex-column'>
      {children}
    </main>
  )
}

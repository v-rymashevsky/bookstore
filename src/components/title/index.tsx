import React from 'react'

interface TitleProps {
  children: React.ReactNode
}

export const Title: React.FC<TitleProps> = ({ children }) => {
  return (
    <h1 className="py-4" style={{ fontFamily: 'Bebas Neue' }}>
      {children}
    </h1>
  )
}

import React from 'react'
import { RootState } from '../../redux/store'
import { useSelector } from 'react-redux'

export const TotalValue: React.FC = () => {
  const total = useSelector((state:RootState) => state.cart.total)

  return (
    <div style={{ fontSize: '2rem', fontFamily: 'Bebas Neue' }}>Total: ${total.toFixed(2)}</div>
  )
}

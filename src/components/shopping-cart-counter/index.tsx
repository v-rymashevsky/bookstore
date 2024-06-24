import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { RootState } from '../../redux/store'

export const ShoppingCartCounter: React.FC = () => {
  const itemsCount = useSelector((state: RootState) => state.cart.counter)
  return (
    <NavLink className="nav-link px-3 d-flex" style={{ width: '200px' }} to="/cart"><i className="bi bi-cart3 me-1"></i> <div className='d-flex align-items-start' style={ { fontSize: '0.7rem', color: '#ffc107' }}>{itemsCount || null}</div></NavLink>

  )
}

import React from 'react'
import { NavLink } from 'react-router-dom'
import { SearchForm } from '../search-form'
import { ShoppingCartCounter } from '../shopping-cart-counter'

interface HeaderProps { }

export const Header: React.FC<HeaderProps> = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
      <div className="container-fluid w-75">
        <NavLink className="navbar-brand" aria-current="page" to="/" style={{ fontFamily: 'Bebas Neue', fontSize: '2rem' }}>Bookstore</NavLink>
        <SearchForm />
        <div className="navbar-nav flex-row">
          <NavLink className="nav-link px-3" aria-current="page" to="/books/favourites">Favourites</NavLink>
          <ShoppingCartCounter />
        </div>
      </div>
    </nav>
  )
}

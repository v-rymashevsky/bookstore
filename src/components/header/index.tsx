import React from 'react'
import { NavLink } from 'react-router-dom'
import { SearchForm } from '../search-form'

interface HeaderProps { }

export const Header: React.FC<HeaderProps> = () => {
  // const switchLinkState = ({ isActive }: { isActive: boolean }): string =>
  //   isActive ? 'nav-a active px-3' : 'nav-a px-3'

  return (
    <nav className="navbar bg-primary" data-bs-theme="dark">
      <div className="container-fluid">
      <NavLink className="navbar-brand" aria-current="page" to="/">Bookstore</NavLink>
       <SearchForm />
        <div className="navbar-nav flex-row">
          <NavLink className="nav-link px-3" aria-current="page" to="/books/favourites">Favourites</NavLink>
          <a className="nav-link px-3" href="#">Cart</a>
          <a className="nav-link px-3" href="#">User</a>
        </div>
      </div>
    </nav>
  )
}

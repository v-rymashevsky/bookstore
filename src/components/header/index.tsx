import React from 'react'
import { NavLink } from 'react-router-dom'

interface HeaderProps { }

export const Header: React.FC<HeaderProps> = () => {
  // const switchLinkState = ({ isActive }: { isActive: boolean }): string =>
  //   isActive ? 'nav-a active px-3' : 'nav-a px-3'

  return (
    <nav className="navbar bg-primary" data-bs-theme="dark">
      <div className="container-fluid">
        <span className="navbar-brand">Bookstore</span>
        <form className="d-flex align-items-center ms-5" role="search">
          <input type="search" className="form-control me-1" placeholder="Search..." style={{ width: '200px' }}/>
          <button type="submit" className="btn btn-warning"><i className="bi bi-search"></i></button>
        </form>
        <div className="navbar-nav flex-row">
          <NavLink className="nav-link px-3" aria-current="page" to="/books/favourites">Favourites</NavLink>
          <a className="nav-link px-3" href="#">Cart</a>
          <a className="nav-link px-3" href="#">User</a>
        </div>
      </div>
    </nav>
  )
}

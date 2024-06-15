import React from 'react'
import { Outlet } from 'react-router-dom'
import { Header } from '../header'
import { Main } from '../main'
import { Footer } from '../footer'

export const Layout: React.FC = () => {
  return (
    <div className="d-flex flex-column" style={{ minHeight: '100vh' }}>
      <Header />
      <div className="container-fluid w-75">
        <Main>
          <Outlet />
        </Main>
      </div>
      <Footer />
    </div>
  )
}

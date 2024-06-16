import { createBrowserRouter } from 'react-router-dom'
import { Layout } from './components/layout'
import { NewBookReleases } from './pages/NewBookReleases'
import { Favourites } from './pages/Favourites'

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <NewBookReleases />
      },
      {
        path: '/books/favourites',
        element: <Favourites />
      }
    ]
  }
])

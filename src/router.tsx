import { createBrowserRouter } from 'react-router-dom'
import { Layout } from './components/layout'
import { NewBookReleases } from './pages/NewBookReleases'
import { Favourites } from './pages/Favourites'
import { BookDetails } from './pages/BookDetails'
import { SearchResults } from './pages/SearchResults'
import { ShoppingCart } from './pages/ShoppingCart'

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
      },
      {
        path: '/books/:id',
        element: <BookDetails />
      },
      {
        path: '/search/:query/:page',
        element: <SearchResults />
      },
      {
        path: '/cart',
        element: <ShoppingCart />
      }
    ]
  }
])

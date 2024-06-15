import { createBrowserRouter } from 'react-router-dom'
import { Layout } from './components/layout'
import { NewBookReleases } from './pages/NewBookReleases'

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <NewBookReleases />
      }
    ]
  }
])

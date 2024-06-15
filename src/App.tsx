import { Layout } from './components/layout'
import { NewBookReleases } from './pages/NewBookReleases'
import { Provider } from 'react-redux'
import { store } from './redux/store'
import './styles.scss'

export function App () {
  return (
    <Provider store={store}>
      <Layout>
        <NewBookReleases />
      </Layout>
    </Provider>
  )
}

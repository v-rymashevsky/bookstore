import { Layout } from './components/layout'
import { Title } from './components/title'
import { Card } from './components/card'
import './styles.scss'

export function App () {
  return (
  <Layout>
    <Title>New releases</Title>
    <Card title='book title' text='by Lentin Joseph,  Apress 2018' image='.\src\assets\book-placeholder.png' price='$31.38' rating='3'/>
    </Layout>
  )
}

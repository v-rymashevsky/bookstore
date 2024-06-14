import ReactDOM from 'react-dom/client'
import { App } from './App.tsx'

const rootElement = document.querySelector('#root')

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement)
  root.render(<App />)
} else {
  console.error('No root element found')
}

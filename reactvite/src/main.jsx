import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Context from './components/Context.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Context>
    <App />
    </Context>
  </StrictMode>,
)

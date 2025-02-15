import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import App from './App.jsx'
import Postmovie from './component/Postmovie.jsx'
import Getmovie from './component/Getmovie.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Postmovie />
    <Getmovie />
  </StrictMode>,
)

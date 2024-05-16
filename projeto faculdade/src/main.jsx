import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import MainRotas from './routes.jsx'



ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <MainRotas/>
  </BrowserRouter>
)

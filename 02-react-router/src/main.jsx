import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
/* Importar BrowserRouter, que dota a mi App de poder manejar rutas.
Debe estar en un componente superior, para que este disponible a toda su descendencia */
import { BrowserRouter } from 'react-router-dom'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* Hago que React Router este disponible en toda mi App */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)

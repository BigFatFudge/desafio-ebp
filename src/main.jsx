import React from 'react'
import ReactDOM from 'react-dom/client'
import { DesafioApp } from './DesafioApp'
import './styles.css'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  
  <React.StrictMode>
   
     <BrowserRouter>
    
         <DesafioApp />
  
     </BrowserRouter>
  
  </React.StrictMode>,
)

import React from 'react'
import './styles.css'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { DesafioApp } from './DesafioApp'
import { Provider } from 'react-redux'
import { store } from './store/store'

ReactDOM.createRoot(document.getElementById('root')).render(
  
  <React.StrictMode>
   
    <Provider store={store}>

       <BrowserRouter>
    
          <DesafioApp />
  
       </BrowserRouter>
  
     </Provider>
  
  </React.StrictMode>
)

import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import ContextProvider from './Components/Context/ContextProvider'

import App from '../App'
import Student from './Components/Student'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContextProvider>
    <App/>

    </ContextProvider>
    
  </React.StrictMode>
)

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App.jsx'
import Header1 from './Headers/heeader.jsx'
import Futer from './Headers/futer.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Header1/>
     <Routes>
      <Route path='/' element={<App/>}/>
    </Routes>
    <Futer/>
    </BrowserRouter>
   
  </StrictMode>,
)

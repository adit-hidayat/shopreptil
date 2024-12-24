import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Navbar from './navbar.jsx'
import Homepage from './homePage.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div>
    <Navbar />
      <div>
        <Homepage/>
      </div>
    </div>
  </StrictMode>,
)

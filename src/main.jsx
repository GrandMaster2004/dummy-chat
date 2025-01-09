import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Header from './components/Header.jsx'
import Footer from './components/footer.jsx'
import Sidebar from './components/sidebar.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header/>
    <Sidebar/>
    <Footer/>
  </StrictMode>,
)

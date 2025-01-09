import './App.css'
import { Link, NavLink } from 'react-router-dom'
import Header from "./components/Header.jsx";
import Footer from "./components/footer.jsx";
import Sidebar from "./components/sidebar.jsx";

function App() {

  return (
      <Header />
      <Sidebar />
      <Footer />
  )
}

export default App

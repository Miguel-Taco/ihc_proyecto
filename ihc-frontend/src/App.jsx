import FoodCard from './components/FoodCard'
import CreateItemPage from './pages/CreateItemPage'
import CreatePerfilPage from './pages/CreatePerfilPage'
import ItemMenu from './components/ItemMenu'
import MenuAdminPage from './pages/MenuAdminPage'
import MainPage from './pages/MainPage'
import MisPerfilesPage from './pages/MisPerfilesPage'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import { useEffect } from 'react'

import "./app.css"
function App() {
  // Set initial theme on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    document.documentElement.setAttribute('data-theme', savedTheme);
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path="/menu-admin" element={<MenuAdminPage />} />
        <Route path="/crear-item" element={<CreateItemPage />} />
        <Route path="/crear-perfil" element={<CreatePerfilPage />} />
        <Route path="/mis-perfiles" element={<MisPerfilesPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
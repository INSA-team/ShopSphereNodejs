import './App.css'
import  { Routes, Route } from 'react-router'
import HomePage from './pages/HomePage'
import ShopPage from './pages/ShopPage'
import LoginPage from './pages/LoginPage'
import DetailsPage from './pages/DetailsPage'
import React from 'react'
import Header from './components/Header'
import Navbar from './components/Navbar'
import CategoriesPage from './pages/CatagoriesPage'
import AboutPage from './pages/AboutPage'

function App() {
  const[productIndex , setProuductIndex] = React.useState()

  return (
    <>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/shop" element={<ShopPage setProuductIndex={setProuductIndex}/>} />
        <Route path="/login" element={<LoginPage />} />
        <Route path='/details' element={<DetailsPage productIndex={productIndex}/>} />
        <Route path='/catagories' element={<CategoriesPage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path="*" element={<><div className="top"><Header /><Navbar /></div><h1>404 Not Found</h1></>} />
      </Routes>
    </>
  )
}

export default App

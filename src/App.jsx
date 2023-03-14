import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Error404Page from './Pages/Error404Page'
import ContactPage from './Pages/ContactPage'
import ProductsPage from './Pages/ProductsPage'
import AboutPage from './Pages/AboutPage'

const App = () => {
  return (
    <>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="home" element={<Home/>}/>
            <Route path="sobremi" element={<AboutPage/>}/>
            <Route path="error" element={<Error404Page/>}/>
            <Route path="contacto" element={<ContactPage/>}/>
            <Route path="productos" element={<ProductsPage/>}/>
            <Route path="/*" element={<Navigate to="/"/>}/>
        </Routes>
    </>
  )
}

export default App;

/*  */
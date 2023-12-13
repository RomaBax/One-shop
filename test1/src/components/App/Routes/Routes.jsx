import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Cart from '../cart/cart'
import Product from '../main/products'
import Home from '../../Pages/Home'

const AppRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/cart' element={<Cart/>}/>
    </Routes>
  )
}

export default AppRoutes
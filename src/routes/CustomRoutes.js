import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Dashboard from '../pages/Dashboard'
import Products from '../pages/Products'
import Orders from '../pages/Orders'
import TodoList from '../pages/TodoList'

function CustomRoutes() {
  return (
    
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path="/products" element={<Products />} />
        <Route path="/orders" element={<Orders />} />
        <Route  path='todo-list' element={<TodoList/>}/>
      </Routes>
    
  )
}

export default CustomRoutes

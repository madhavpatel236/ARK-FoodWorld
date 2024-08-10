import React, { lazy, Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import Root from './Root'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import {About, Home, RestaurantDetail } from './components'
import Cart from './components/Cart/Cart'

// implement lazy loding also

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Root />}>
      <Route path='/' element={<Home />} />
     <Route path='about' element= { <Suspense fallback={<>...</>}> <About /> </Suspense>} /> 
      <Route path='rest-detail/:resId' element={<RestaurantDetail />} />
      <Route path='cart' element={<Cart />} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <RouterProvider router={router} />
  //  </React.StrictMode>,
)

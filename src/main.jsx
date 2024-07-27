import React from 'react'
import ReactDOM from 'react-dom/client'
import Root from './Root'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import { About, Home, RestaurantDetail } from './components'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Root />}>
      <Route path='/' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='rest-detail/:resId' element={<RestaurantDetail />} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <RouterProvider router={router} />
  // </React.StrictMode>,
)

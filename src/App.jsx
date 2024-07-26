import './App.css'
import { createBrowserRouter, RouterProvider, Outlet, createRoutesFromElements, Route } from 'react-router-dom'
import {Home, About} from './components/index'
import Root from './Root'
function App() {

  

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App

import './App.css'
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Root />
    },
    {
      path: '/about',
      element: <About />
    },
    {
      path: '/home',
      element: <Root />
    },
  ])

  return (
    <div>
      <RouterProvider router={router} >
        <Root />
      </RouterProvider>
    </div>
  )
}

export default App

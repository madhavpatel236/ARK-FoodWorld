import React from 'react'
import { Header, Home } from './components/index'
import { Outlet } from 'react-router-dom'

function Root() {

  return (
    <div>
      <Header />
      <Outlet />
    </div>
  )
}

export default Root
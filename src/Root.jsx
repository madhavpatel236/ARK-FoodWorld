import React from 'react'
import { Header, Home } from './components/index'

function root() {
  return (
    <div>
      <Header />
      <Home />
      {/* <Outlet /> */}
    </div>
  )
}

export default root
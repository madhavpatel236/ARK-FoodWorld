import React, { useEffect, useState } from 'react'
import { Header, Home } from './components/index'
import { Outlet } from 'react-router-dom'
import userContext from './utils/userContext'
import { Provider } from 'react-redux'
import appStore from './utils/appStore.js'

function Root() {

  const [userDetails, setUserDetails] = useState()

  //authentication
  useEffect(() => {
    // make a api call and recive the user detils 
    const data = {
      name: "madhav patel"
    }
    setUserDetails(data.name)
  }, [])


  return (
    <Provider store={appStore}>
      <userContext.Provider value={{ loggedInUser: userDetails }} >
        <div>
          <Header />
          <Outlet />
        </div>
      </userContext.Provider>
    </Provider>
  )
}

export default Root
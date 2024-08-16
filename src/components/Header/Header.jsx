import React, { useContext } from 'react'
import logo from '../../img/logo.png'
import { Link } from 'react-router-dom'
import userContext from '../../utils/userContext'
import { useSelector } from 'react-redux'

function Header() {

    const { loggedInUser } = useContext(userContext)

    // we can now subscribe the store using the useSelector()
    const cartItems = useSelector((store) => store.cart.items);

    return (
        <div className='fixed w-full z-20 -mt-1 -mr-1 h-24 flex justify-between bg-white  border-2 '>
            <div> <img className='w-36 h-32 -mt-4 ' src={logo} alt='logo' /> </div>
            <div className='flex ml-24 items-center justify-between w-2/4 text-red-500 font-Barlow font-medium  text-xl'>
                <div> <Link to='/'> Home </Link> </div>
                <div> <Link to='/about'> About </Link> </div>
                <div>Help</div>
                <div> <Link to='/cart'> 🛒 ({cartItems.length} items) </Link> </div>
                <ul>👤 {loggedInUser}</ul>
            </div>
            <div className='flex justify-center items-center mr-10 font-Ubuntu font-normal text-xl text-red-500'>login</div>
        </div>
    )
}

export default Header
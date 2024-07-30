import React, { useContext } from 'react'
import logo from '../../img/logo.jpeg'
import { Link } from 'react-router-dom'
import userContext from '../../utils/userContext'
import {useSelector} from 'react-redux'

function Header() {

    const {loggedInUser} = useContext(userContext)

    // we can now subscribe the store using the useSelector()
    const cartItems = useSelector((store) => store.cart.items);

    return (
        <div className='flex justify-between bg-red-500'>
            <div>
                <img className='w-22 h-20' src={logo} alt='logo' />
            </div>
            <div className='flex mr-16 items-center justify-between w-1/2'>
                <div> <Link to='/'> Home </Link> </div>
                <div>Manu</div>
                <div> <Link to='/about'> About </Link> </div>
                <div>Help</div>
                <div> 🛒 ({cartItems.length} items) </div>
                <ul>👤 {loggedInUser}</ul>
                <div>login</div>
            </div>
        </div>
    )
}

export default Header
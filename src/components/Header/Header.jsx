import React, { useContext } from 'react'
import logo from '../../img/logo.jpeg'
import { Link } from 'react-router-dom'
import userContext from '../../utils/userContext'
import { useSelector } from 'react-redux'

function Header() {

    const { loggedInUser } = useContext(userContext)

    // we can now subscribe the store using the useSelector()
    const cartItems = useSelector((store) => store.cart.items);

    return (
        <div className=' fixed w-full z-20 flex justify-between bg-white border-2 '>
            <div>
                <img className='w-22 h-16' src={logo} alt='logo' />
            </div>
            <div className='flex ml-24 items-center justify-between w-2/4 text-red-600 font-Ubuntu font-semibold text-xl'>
                <div> <Link to='/'> Home </Link> </div>
                {/* <div>Manu</div> */}
                <div> <Link to='/about'> About </Link> </div>
                <div>Help</div>
                <div> <Link to='/cart'> 🛒 ({cartItems.length} items) </Link> </div>
                <ul>👤 {loggedInUser}</ul>
            </div>
            <div className='flex justify-center items-center mr-10 font-Ubuntu font-semibold text-xl text-red-600'>login</div>
        </div>
    )
}

export default Header
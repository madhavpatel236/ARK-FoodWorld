import React from 'react'
import logo from '../../img/logo.jpeg'
import { Link } from 'react-router-dom'
function Header() {
    return (
        <div className='flex justify-between bg-red-500'>
            <div>
                <img className='w-22 h-20' src={logo} alt='logo' />
            </div>
            <div className='flex mr-16 items-center justify-between w-1/2'>
                <ul> <Link to='/'> Home </Link> </ul>
                <ul>Manu</ul>
                <ul> <Link to='/about'> About </Link> </ul>
                <ul>Help</ul>
                <ul>Cart🛒</ul>
                {/* <ul>profile</ul> */}
                <ul>login</ul>
            </div>
        </div>
    )
}

export default Header
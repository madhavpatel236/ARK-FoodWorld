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
                <div> <Link to='/'> Home </Link> </div>
                <div>Manu</div>
                <div> <Link to='/about'> About </Link> </div>
                <div>Help</div>
                <div>Cart🛒</div>
                {/* <ul>profile</ul> */}
                <div>login</div>
            </div>
        </div>
    )
}

export default Header
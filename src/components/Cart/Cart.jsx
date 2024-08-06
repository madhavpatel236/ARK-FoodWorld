import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux';
import CartCard from './CartCard';
import Price from './Price';


function Cart() {

  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div>
      <div className='text-center mb-8 pt-32'>
        <h1 className='font-bold text-4xl'> Cart </h1>
      </div>

      <div className='flex font-Ubuntu'>

        <div className=' w-8/12 flex flex-wrap justify-around '>
          {cartItems && cartItems.map((res, index) => {
            return <CartCard key={index} data={res?.card?.info} />
          })}
        </div>

        <div className='flex-col mb-4 mr-5 p-4 h-5/6  w-4/12 font-Ubuntu rounded-xl '>
          <h1 className='flex'> <Price /> </h1>
        </div>
      </div>


    </div>
  )
}

export default Cart

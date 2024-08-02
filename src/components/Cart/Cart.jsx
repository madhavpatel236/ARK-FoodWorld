import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux';
import CartCard from './CartCard';


function Cart() {
  const cartItems = useSelector((store) => store.cart.items);
  // console.log('cartItems', cartItems)

  return (
    <div>
      <div className='text-center mb-8 pt-32'>
        <h1 className='font-bold text-4xl'> Cart </h1>
      </div>

      <div className='flex font-Ubuntu'>
        <div className='ml-28  flex flex-wrap '>
          {cartItems && cartItems.map((res) => {
            return <CartCard key={res?.card?.info?.id} data={res?.card?.info} />
          })}
        </div>

        <div className='flex-col w-5/12'> </div>
      </div>

    </div>
  )
}

export default Cart

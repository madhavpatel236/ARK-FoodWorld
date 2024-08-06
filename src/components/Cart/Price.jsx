import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

function Price() {
    const data = useSelector((store) => store.cart.items);

    const [cartPrice, setCartPrice] = useState(0)
    const [discount, setDiscount] = useState(cartPrice)
    const [delhiveryCharge, setDelhiveryCharge] = useState(cartPrice)


    useEffect(() => {
        const d = data.map((item) => item?.card?.info?.price / 100 || item?.card?.info?.defaultPrice / 100) // [price, price, price ...]

        setCartPrice(d.reduce((accumulator, currentValue) => {
            return accumulator + currentValue
        }, 0))
    }, [data])


    useEffect(() => {
        setDiscount(cartPrice * 1 / 10)
        setDelhiveryCharge(cartPrice * 1 / 20)

    }, [cartPrice])

    return (
        <div className='flex flex-col'>
            <div className='fixed flex flex-col h-3/6 w-4/12 p-7 glow justify-around border text-white bg-red-700 rounded-l-3xl'>
                <h1 className='text-3xl font-bold pb-4'> Order Summary </h1>

                <div className=' flex justify-between text-lg font-semibold'> Price ({data.length} items) : <span> ₹ {cartPrice} </span> </div>

                <div className='flex justify-between  text-lg font-semibold'> Discount (10%) : <span> - ₹ {discount}  </span> </div>

                <div className='flex justify-between  text-lg font-semibold border-b-2 pb-2'>Delhivery Charge (5%) :  <span>   + ₹ {delhiveryCharge} </span> </div>

                <h1 className='border-b-2 pb-2'>  You have saved <span className='font-extrabold pl-1 pr-1 '> ₹{discount} </span>  on this order 😊 </h1>

                <div className='flex justify-between  text-lg font-semibold'> Total :   <span > ₹ {cartPrice + delhiveryCharge - discount.toFixed()} </span> </div>

                <button className='h-10 rounded-xl mt-2 font-bold  bg-white text-red-500 border-red-700 transform duration-300 shadow hover:shadow-lg hover:shadow-current hover:bg-red-100 hover:text-red '> Place Order </button>
            </div>
            
        </div>

    )
}

export default Price
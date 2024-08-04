import React from 'react'
import { CDN_URL } from '../../utils/constance'
import { useDispatch } from 'react-redux'
import appStore from '../../utils/appStore'
import { removeItems } from '../../utils/Slices/cartSlice'

function CartCard({ data }) {
    console.log('data', data)
    
    const dispatch =useDispatch(appStore)

    const handleRemove = (item) => (
        // console.log(item)
        dispatch(removeItems(item))
    )

    return (
        <div className='flex mb-4 h-40 w-8/12 border border-gray-3 rounded-lg  shadow-md'>
           {data?.imageId &&  <img className='flex w-36 object-cover shadow-black z-10 m-2 rounded-md' src={CDN_URL + data?.imageId } alt=' '  /> }
            <div className=' static flex-col flex  justify-around p-2 font-Ubuntu '>
                <h2 className='flex-col line-clamp-2 font-extrabold text-lg '> {data?.name} </h2>
                <h2 className='flex-col line-clamp-2 text-gray-700 font-medium '> {data?.description || data?.category} </h2>
                <h2 className='flex-col font-extrabold text-lg'> ₹ {data?.price / 100 || data?.defaultPrice / 100} </h2>
            </div>

            <div className='flex flex-col text-center justify-center mr-5 ml-auto'>
                <button
                 className=' pl-3 pr-3 text-red-600 hover:border-red-600 hover:border rounded-xl'
                 onClick={() => handleRemove(data?.id)}
                 > Remove </button>
            </div>
        </div>
    )
}

export default CartCard


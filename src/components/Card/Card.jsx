import React from 'react'
import logo from '../../img/logo.png'
import { CDN_URL } from '../../utils/constance'
import { Link } from 'react-router-dom'
// import star from '../../img/star.png'

function Card({ resData }) {
    // console.log('resData' , resData)

    return (
        <div className='flex-col w-64 h-auto mt-6 mr-5 mb-4 flex-wrap rounded-3xl   transform hover:scale-105 duration-300 hover:shadow-2xl hover:shadow-black transition'>
            <div className='flex justify-center p-2 '>
                <img className=' shadow-slate-700  shadow-xl h-52 w-60 rounded-3xl ' src={CDN_URL + resData?.cloudinaryImageId} alt='Restaurent img' />
            </div>
            <div className='flex-col p-3 font-Ubuntu '>
                <h1 className='line-clamp-1 font-bold text-base'>{resData.name}</h1>
                {/* <h4 className='flex flex-wrap'>🔍 {resData.cuisines.join(', ')}</h4> */}
                <h4 className='flex text-gray-700 font-medium ine-clamp-1'>{resData.areaName}</h4> <br />
                <h4 className='flex ine-clamp-1 text-gray-700 font-medium font-RobotoSlab '> {resData.costForTwo}</h4>
                <h4 className='flex ine-clamp-1  text-gray-700 font-medium font-RobotoSlab  justify-between'> ✰ {resData.avgRating}
                    {/* <div className='flex ine-clamp-1 '>  ⌛{resData.sla.slaString}</div> */}
                </h4>
            </div>
        </div>
    )
}

// Higher order component : Higher Order Component is normal a javascript function which is return a another funcrtion and this function return a JSX.
// normal function > reaturn another function > retunt jsx
// in our case we have a card but some of they have a discout so for that we make a component which is <Card /> so we can make a higher order component which is with the discount offer text in the image

export const withOfferCard = (Card) => {
    return (props) => {
        const {offer} = props
        return(
            <div className=' font-Ubuntu text-lg'>
                <h1 className="absolute w-60 h-10 p-1 ml-2 mt-44 bg-transparent text-white bg-red-800 rounded-b-3xl font-Ubuntu font-bold text-center "> {offer} </h1>
                <Card {...props}  />
            </div>
        )
    }
}

export default Card

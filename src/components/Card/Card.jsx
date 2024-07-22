import React from 'react'
import logo from '../../img/logo.jpeg'
import { CDN_URL } from '../../utils/constance'

function Card({ resData }) {
    console.log(resData.info.costForTwo)

    return (
        <div className='flex-col w-64 h-auto mt-6 mr-5 mb-4 flex-wrap rounded-2xl hover:size-72 hover:ease-in-out hover:duration-1000'>  
            <div className='flex justify-center pb-2'>
                <img className=' shadow-slate-700 shadow-xl h-52 w-60 rounded-3xl ' src={CDN_URL + resData.info.cloudinaryImageId} alt='Res img' />
            </div>
            <div className='flex-col p-3 font-Ubuntu '> 
                <h1 className='line-clamp-1 font-bold text-base'>{resData.info.name}</h1>
                {/* <h4 className='flex flex-wrap'>🔍 {resData.info.cuisines.join(', ')}</h4> */}
                <h4 className='flex text-gray-700 font-medium ine-clamp-1'>{resData.info.areaName}</h4> <br />
                <h4 className='flex ine-clamp-1 text-gray-700 font-medium font-RobotoSlab '> {resData.info.costForTwo}</h4>
                <h4 className='flex ine-clamp-1  text-gray-700 font-medium font-RobotoSlab  justify-between'> ⭐{resData.info.avgRatingString}
                    <h4 className='flex ine-clamp-1 '>  ⌛{resData.info.sla.slaString}</h4>
                </h4>
            </div>
        </div>
    )
}

export default Card
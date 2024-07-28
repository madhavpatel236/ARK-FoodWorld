import React from 'react'
import { CDN_URL } from '../../utils/constance'

function Items({ data }) {
    console.log(data[4]?.card.info.itemAttribute.vegClassifier)

    return (
        <div className='font-Ubuntu cursor-pointer'>
            {data.map((d) => (
                <div key={d?.card?.info?.name} className='flex mb-5 pb-5 pl-3 pr-3 w-auto h-auto pt-5  border-t-2 '>
                    <div className='w-9/12 m-2 flex-col'>
                        {d?.card.info.itemAttribute.vegClassifier === 'VEG' ? <span className=' w-auto h-auto p-1 rounded-sm bg-green-500'> VEG </span> : <span className='w-auto h-auto p-1 rounded-sm bg-red-500 '> NON-VEG </span>}
                        <div className='text-base font-bold pb-2 mt-2'>
                            <span> {d?.card?.info?.name} </span>
                            <span> - ₹{d?.card?.info?.price / 100 || d?.card?.info?.defaultPrice / 100} </span>
                        </div>
                        <div className='flex-col h-auto '>
                            <p className='pb-2 ine-clamp-3 '> {d?.card?.info?.description} </p>
                            {d?.card?.info?.ratings.aggregatedRating.rating && <p className='ine-clamp-3 text-blue-600 '>*️⃣{d?.card?.info?.ratings.aggregatedRating.rating + " " + "(" + (d?.card?.info?.ratings.aggregatedRating.ratingCount) + ")"} </p>}
                        </div>
                        <button className='p-3 mt-4 flex justify-center bg-black text-white rounded-lg '> + Cart </button>
                    </div>

                    <div className=' w-3/12 pt-3  justify-center items-center '>
                        {d.card.info.imageId && <img  src={CDN_URL + d.card.info.imageId} alt='' className='w-48 h-44 rounded-2xl shadow-2xl shadow-black z-10 ' />}
                    </div>

                </div>
            ))}
            <div>
                {/* <img src={CDN_URL +  } /> */}
            </div>

        </div>
    )
}

export default Items


// <div className='pl-4'>
// {data.map((d) => (
//     <div key={d?.card?.info?.name}>
//         <span> {d?.card?.info?.name} </span>
//         <span> - ₹{d?.card?.info?.price / 100} </span>
//         <div> {d?.card?.info?.description} </div>
//     </div>
// ))}
// </div>

import React, { useEffect, useState } from 'react'
import { CDN_URL, SWIGGY_HOME_API } from '../../utils/constance'
import OfferCard from './OfferCard'
import time from '../../img/time.png'
import { useParams } from 'react-router-dom'
import { SWIGGY_REST_DETAILS_API } from '../../utils/constance'
import Shimmer from '../Shimmer/Shimmer'

function RestaurantDetail() {
  const [restaurantDetails, setRestaurantDetails] = useState([])
  const [offerCard, setOfferCard] = useState([])
  const [homeApi, setHomeApi] = useState([])

  const { resId } = useParams() // call useParams and get value of restaurant id using object destructuring

  useEffect(() => {
    fetchManu()
    SWIGGY_HOME_API_FETCH()
  }, [])

  const SWIGGY_HOME_API_FETCH = async () => {
    const data = await fetch(SWIGGY_HOME_API)
    const json = await data.json();
    const detail = await json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    setHomeApi(detail)
  }

  const fetchManu = async () => {
    const data = await fetch(SWIGGY_REST_DETAILS_API + resId + "&catalog_qa=undefined&submitAction=ENTER")
    const json = await data.json();
    const detail = await json?.data?.cards
    // console.log('detail', detail)
    setRestaurantDetails(detail)
    const offer = await detail[3]?.card?.card?.gridElements?.infoWithStyle?.offers
    setOfferCard(offer)
  }
       
  return  restaurantDetails.length === 0 ? (
    <Shimmer />
  ) : (
      <div className='flex-col mt-14 ml-48  '>
        <div className='flex-col w-3/4 h-auto border-2 border-black rounded-3xl font-Ubuntu font-medium text-base'>
          <div className='flex justify-between'>
            <div className='flex-col '>
              <h1 className='flex mt-3 ml-5 font-Ubuntu font-bold text-3xl'>{restaurantDetails[2]?.card?.card?.info?.name}</h1>
              <h1 className='flex ml-5 font-normal  '> {restaurantDetails[2]?.card?.card?.info?.cuisines.join(", ")}  </h1>
              <h1 className='flex ml-5 font-normal  '> {restaurantDetails[2]?.card?.card?.info?.areaName}  </h1>
            </div>
            <h1 className='flex mt-4 pr-7 text-xl '> ⭐{restaurantDetails[2]?.card?.card?.info?.avgRating} ({restaurantDetails[2]?.card?.card?.info?.totalRatingsString})</h1>
          </div>

          <div className='flex justify-between'>
            <h1 className='flex mt-6 ml-4 '>
              <img className='w-7 h-7' src={time} alt='time' />
              {restaurantDetails[2]?.card?.card?.info?.sla?.slaString}
            </h1>

            <h1 className='flex mt-3 mr-8 mb-2 p-2 text-xl bg-red-500 text-white border-black border-2 rounded-3xl  '> {restaurantDetails[2]?.card?.card.info?.costForTwoMessage}  </h1>
          </div>
        </div>
        <div className='flex-col overflow-auto  w-3/4 '>
          <h1 className='mt-10 mb-4 text-2xl font-medium font-RobotoSlab '> Deals For You</h1>
          <div className='flex gap-7 '>
            {offerCard.map((items) => {
              return <OfferCard key={items.info.offerIds[0]} offer={items?.info} />
            })}
          </div>
        </div>
      </div>
      
    )
  }

  export default RestaurantDetail


import React, { useEffect, useState } from 'react'
import { CDN_URL, SWIGGY_HOME_API } from '../../utils/constance'
import OfferCard from './OfferCard'
import time from '../../img/time.png'
import { useParams } from 'react-router-dom'
import { SWIGGY_REST_DETAILS_API } from '../../utils/constance'
import Shimmer from '../Shimmer/Shimmer'
import ItemList from './ItemList'

function RestaurantDetail() {
  const [restaurantDetails, setRestaurantDetails] = useState([])
  const [offerCard, setOfferCard] = useState([])
  const [homeApi, setHomeApi] = useState([])
  const [showIndex, SetShowIndex] = useState()
  const [enable, setEnable] = useState(false)

  const { resId } = useParams() // call useParams() and get value of restaurant id using object destructuring

  useEffect(() => {
    fetchManu()
    SWIGGY_HOME_API_FETCH()
  }, [])

  const SWIGGY_HOME_API_FETCH = async () => {
    const data = await fetch(SWIGGY_HOME_API)
    const json = await data.json();
    const detail = await json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    setHomeApi(detail)
  }

  const fetchManu = async () => {
    const data = await fetch(SWIGGY_REST_DETAILS_API + resId + "&catalog_qa=undefined&submitAction=ENTER")
    const json = await data.json();
    const detail = await json?.data?.cards
    console.log('detail', detail)
    setRestaurantDetails(detail)
    const offer = await detail[3]?.card?.card?.gridElements?.infoWithStyle?.offers
    setOfferCard(offer)
  }
  // console.log('restaurantDetails', restaurantDetails)
  // console.log(restaurantDetails[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards)

  const manu =

    restaurantDetails[0]?.groupedCard?.cardGroupMap?.REGULAR?.cards ||
    restaurantDetails[1]?.groupedCard?.cardGroupMap?.REGULAR?.cards ||
    restaurantDetails[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards ||
    restaurantDetails[3]?.groupedCard?.cardGroupMap?.REGULAR?.cards ||
    restaurantDetails[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards ||
    restaurantDetails[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards

  // console.log('manu', manu)

  const manuItems = manu?.filter(
    (c) => c?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  );

  // console.log('manuItems', manuItems)

  return restaurantDetails.length === 0 ? (
    <Shimmer />
  ) : (
    <div className='flex-col pt-32 ml-48  w-8/12 '>

      {/*  upper main restaurant card comonent */}
      <div className='flex-col w-auto h-auto shadow-lg shadow-black border rounded-3xl font-Ubuntu font-medium text-base  transform hover:scale-105 transition duration-300 '>
        <div classSetShowIndexName='flex justify-between'>
          <div className='flex-col '>
            <h1 className='flex mt-3 ml-5 font-Ubuntu font-bold text-3xl'>{restaurantDetails[2]?.card?.card?.info?.name}</h1>
            <h1 className='flex ml-5 font-normal  '> {restaurantDetails[2]?.card?.card?.info?.cuisines.join(", ")}  </h1>
            <h1 className='flex ml-5 font-normal  '> {restaurantDetails[2]?.card?.card?.info?.areaName + ", " + restaurantDetails[2]?.card?.card?.info?.city}  </h1>
          </div>
          <h1 className='flex mt-4 ml-5 text-xl '>*️⃣ {restaurantDetails[2]?.card?.card?.info?.avgRating} ({restaurantDetails[2]?.card?.card?.info?.totalRatingsString})</h1>
        </div>
        <div className='flex justify-between items-center pb-3'>
          <h1 className='ml-4 mt-3'>
            {restaurantDetails[2]?.card?.card?.info?.availability?.opened === true ? <div className='p-2 rounded-lg bg-green-500'> Open </div> : <div p-2 rounded-lg bg-red-500> Closed </div>}
          </h1>
          <h1>
            {restaurantDetails[2]?.card?.card?.info?.availability?.opened === true && <div className='flex mr-8 mt-4'> <img className=' w-7 h-7' src={time} alt='time' /> <div> {restaurantDetails[2]?.card?.card?.info?.sla?.slaString} </div> </div>}
          </h1>
        </div>
      </div>

      {/* offer component */}
      <div className='flex-col w-auto '>
        <h1 className=' mt-10 mb-4 text-2xl font-bold font-Ubuntu '> Deals For You</h1>
        <div className='flex gap-7 overflow-x-scroll scrollbar-none '>

          {offerCard.map((items) => {
            return <OfferCard key={items.info.offerIds[0]} offer={items?.info} />
          })}
        </div>
      </div>

      {/* items option component */}
      <div className='w-auto mt-14 '>
        {manuItems.map((list, index) => 
          // This is an example of a Controlled Component :  A component is controlled when it's managed by its parent using props.
          <ItemList
            key={list?.card?.card?.title}
            options={list?.card?.card}
            showItems={enable == true && index === showIndex ? true : false}
            SetShowIndex={() => SetShowIndex(index)}
            setEnable={() => setEnable(!enable)}
          />
        )}
      </div>
    </div>

  )
}

export default RestaurantDetail

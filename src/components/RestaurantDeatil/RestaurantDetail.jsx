import React, { useEffect, useState } from 'react'
import { CDN_URL, SWIGGY_HOME_API } from '../../utils/constance'
import OfferCard from './OfferCard'
import time from '../../img/time.png'
import { useParams } from 'react-router-dom'
import { SWIGGY_REST_DETAILS_API } from '../../utils/constance'
import Shimmer from '../Shimmer/Shimmer'
// import InputLabel from '@mui/material/InputLabel';
// import MenuItem from '@mui/material/MenuItem';
// import FormControl from '@mui/material/FormControl';
// import Select from '@mui/material/Select';

function RestaurantDetail() {
  const [restaurantDetails, setRestaurantDetails] = useState([])
  const [offerCard, setOfferCard] = useState([])
  const [homeApi, setHomeApi] = useState([])
  const [manuItem, setManuItem] = useState([])

  const { resId } = useParams() // call useParams and get value of restaurant id using object destructuring
  // console.log(resId)

  useEffect(() => {
    fetchManu()
    SWIGGY_HOME_API_FETCH()
  }, [])

  const SWIGGY_HOME_API_FETCH = async () => {
    const data = await fetch(SWIGGY_HOME_API)
    const json = await data.json();
    const detail = await json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    setHomeApi(detail)
    // console.log('HomeApi', homeApi[4]?.info)
  }

  const fetchManu = async () => {
    const data = await fetch(SWIGGY_REST_DETAILS_API + resId + "&catalog_qa=undefined&submitAction=ENTER")
    const json = await data.json();
    const detail = await json?.data?.cards
    const offer = await detail[3]?.card?.card?.gridElements?.infoWithStyle?.offers
    setOfferCard(offer)
    const manuItems = await detail[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards
  }

  if (restaurantDetails.length === 0) {
    return <Shimmer />
  }


    return (
      // <>
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
              <img className='w-7 h-7' src={time} />
              {restaurantDetails[2]?.card?.card?.info?.sla?.slaString}
            </h1>

            <h1 className='flex mt-3 mr-8 mb-2 p-2 text-xl bg-red-500 text-white border-black border-2 rounded-3xl  '> {restaurantDetails[2]?.card?.card.info?.costForTwoMessage}  </h1>
          </div>
        </div>
        <div className='flex-col overflow-hidden  w-3/4 '>
          <h1 className='mt-10 mb-4 text-2xl font-medium font-RobotoSlab '> Deals For You</h1>
          <div className='flex gap-7 '>
            {offerCard.map((items) => {
              // console.log('items', items)
              return <OfferCard key={items.info.offerIds[0]} offer={items?.info} />
            })}
          </div>
        </div>


      </div>
      
    )
  }

  export default RestaurantDetail


  // <FormControl fullWidth>
  //       <InputLabel id="custom-dropdown-label">Select an option</InputLabel>
  //       <Select
  //         labelId="custom-dropdown-label"
  //         id="custom-dropdown"
  //         value={value}
  //         onChange={handleChange}
  //         renderValue={(selected) => (
  //           <CustomCard
  //             title={selected.title}
  //             subtitle={selected.subtitle}
  //           />
  //         )}
  //       >
  //         <MenuItem value="">
  //           <em>None</em>
  //         </MenuItem>
  //         <MenuItem value={{ title: 'Option 1', subtitle: 'Subtitle 1' }}>
  //           <CustomCard title="Option 1" subtitle="Subtitle 1" />
  //         </MenuItem>
  //         <MenuItem value={{ title: 'Option 2', subtitle: 'Subtitle 2' }}>
  //           <CustomCard title="Option 2" subtitle="Subtitle 2" />
  //         </MenuItem>
  //         <MenuItem value={{ title: 'Option 3', subtitle: 'Subtitle 3' }}>
  //           <CustomCard title="Option 3" subtitle="Subtitle 3" />
  //         </MenuItem>
  //       </Select>
  //     </FormControl>
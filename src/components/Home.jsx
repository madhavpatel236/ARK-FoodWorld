import React, { useEffect, useState } from 'react'
import Card from './Card/Card'
import Shimmer from './Shimmer/Shimmer'

function Home() {
  const [listOfRestaurant, setListOfRestaurant] = useState([])
  const [filteredRestaurant, setFilteredRestaurant] = useState([])
  const [searchedRest, setSearchedRest] = useState("")

  useEffect(() => {
    fetchData();
  },[])

  const fetchData = async () => {
    const fetchData = await fetch('https://thingproxy.freeboard.io/fetch/https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.4707019&lng=70.05773&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING')
    const response = await fetchData.json()
    // console.log(response)
    const data = await response?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    setListOfRestaurant(data)
    setFilteredRestaurant(data)
  }

  // TODO : pre redndering of the home page add the last 

  // if (listOfRestaurant.length == 0) {
  //   return <Shimmer />
  // }

  return (
    <div>
      <div className='flex flex-wrap'>
        <input
          className='border-2 border-black rounded-3xl mt-10 ml-16 mb-3 p-2 min-w-80 placeholder-black placeholder:text-gray-500' placeholder='Search for restaurants and food'
          type='text'
          value={searchedRest}
          onChange={(e) => {
            setSearchedRest(e.target.value)
          }}
        />
        <button
          className='border-2 bg-red-600 text-white rounded-3xl mt-10 ml-6 mr-72 mb-3 min-w-32'
          onClick={() => {
            // console.log(listOfRestaurant)
            const filteredRestaurant = listOfRestaurant.filter((rest) => (
              //  console.log(rest)
              rest.info.name.toLowerCase().includes(searchedRest.toLowerCase())
            ))
            // console.log(filterredRestaurant)
            setFilteredRestaurant(filteredRestaurant)
          }}

        > Search</button>
        <button
          className='border-2 border-red-500 text-red-500 rounded-3xl mt-10 ml-20 mb-3 p-2 min-w-52'
          onClick={() => {
            const filteredData = listOfRestaurant.filter(
              (res) => res.info.avgRating >= 4.5
            )
            console.log(filteredData)
            setFilteredRestaurant(filteredData)
          }}
        > Top Rated Resturent </button>
      </div>
      <h1 className='mt-8 ml-16 mb-3 font-medium text-3xl font-Ubuntu'>Restaurants with online food delivery in Jamnager</h1>
      <div className='flex flex-wrap justify-center' >
        {console.log(filteredRestaurant)}
        {filteredRestaurant.map((restaurant) => (
           <Card key={restaurant.info.id} resData={restaurant?.info} />
        ))}
      </div>
    </div>
  )
}

export default Home
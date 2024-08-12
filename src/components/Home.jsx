import React, { useEffect, useState } from 'react'
import Card, { withOfferCard } from './Card/Card'
import Shimmer from './Shimmer/Shimmer'
import { SWIGGY_HOME_API } from '../utils/constance'
import { Link } from 'react-router-dom';

function Home() {
  const [listOfRestaurant, setlistOfRestaurant] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [searchedRest, setSearchedRest] = useState([])

  const ResaurentCardWithOffer = withOfferCard(Card) // Higher order component

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(SWIGGY_HOME_API);
    const json = await data.json();

    const rest =
      json?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.restaurants ||
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants ||
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants ||
      json?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.restaurants ||
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants ||
      json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants

    setlistOfRestaurant(rest);
    setFilteredRestaurant(rest)
  }

  const searchRecomendation = async () => {
    console.log(searchText)
    const data = await fetch(`https://thingproxy.freeboard.io/fetch/https://www.swiggy.com/dapi/restaurants/search/suggest?lat=22.4833391&lng=70.05802659999999&str=${searchText}&trackingId=undefined&includeIMItem=true`)
    const json = await data.json()
    const searchedRes = await json?.data?.suggestions;
    setSearchedRest(searchedRes)
    // console.log('json', json)
  }

  useEffect(() => {
    searchRecomendation()
  }, [searchText])

  console.log('searchedRest', searchedRest)


  return listOfRestaurant.length === 0 ? <Shimmer />
    : (
      <div>
        <div className='flex pt-24 flex-wrap '>
          <input
            className='border-2 border-red-500 after:border-red-500  mt-10 ml-20 mb-3 p-2 min-w-80 placeholder-black  text-center  placeholder:text-gray-500' placeholder='Search for restaurants and food'
            type='text'
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value)
            }}
          />
          <button
            className='border-2 border-red-500 hover:bg-red-300 transition duration-300 hover:border-red-700 hover:text-red-700 bg-red-500 text-white mt-10 ml-6 mr-72 mb-3 min-w-32'
            onClick={() => {
              // console.log(listOfRestaurant)
              const filteredRestaurant = listOfRestaurant.filter((rest) => (
                rest.info.name.toLowerCase().includes(searchText.toLowerCase())
              ))
              setFilteredRestaurant(filteredRestaurant)
            }}

          > Search</button>
          <button
            className='border-2 border-red-500 text-red-500 mt-10 ml-20 mb-3 p-2 min-w-52'
            onClick={() => {
              const filteredData = listOfRestaurant.filter(
                (res) => res.info.avgRating > 4.5
              )
              setFilteredRestaurant(filteredData)
            }}
          > Top Rated Resturent </button>
        </div>

        <div className={`fixed flex flex-col z-50 ml-20  w-80 -mt-4 cursor-pointer font-Ubuntu font-normal text-lg transition  `} >
          {searchedRest &&
            searchedRest.map((info) => {
              return <div className='bg-red-500 px-2'> <h1 className=' flex text-center line-clamp-1 hover:scale-y-105 hover:scale-x-95 text-white py-1 border-b border-white'> {info?.text} </h1> </div>
            })
          }
        </div>

        <h1 className={`mt-8 ml-20 mb-3 font-medium text-3xl font-Ubuntu`}>Restaurants with online food delivery in Jamnager</h1>

        <div className='flex flex-wrap justify-center' >
          {filteredRestaurant.map((restaurant) => (
            < Link to={"rest-detail/" + restaurant.info.id} key={restaurant.info.id} >
              {
                restaurant?.info?.aggregatedDiscountInfoV3 ? // check a condition that if the offer exist then use a Higher order component other wise use the normal card function
                  (<ResaurentCardWithOffer resData={restaurant?.info} offer={restaurant?.info?.aggregatedDiscountInfoV3.header + " " + restaurant?.info?.aggregatedDiscountInfoV3.subHeader} />) :
                  (<Card resData={restaurant?.info} />)
              }
              {/* <Card resData={restaurant?.info} /> */}
            </Link>
          ))}
        </div>
      </div >
    );

}
export default Home



// make a saperate component of the filtered list of rest and at the time of onclick event we call that component.


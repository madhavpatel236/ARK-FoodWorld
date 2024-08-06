import React, { useEffect, useState } from 'react'
import Card, { withOfferCard } from './Card/Card'
import Shimmer from './Shimmer/Shimmer'
import { SWIGGY_HOME_API } from '../utils/constance'
import { Link } from 'react-router-dom';

function Home() {
  const [listOfRestaurant, setlistOfRestaurant] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");


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

    setlistOfRestaurant(rest );
    setFilteredRestaurant(rest)
  }

  return listOfRestaurant.length === 0 ? <Shimmer /> 
  :(
    <div>
      <div className='flex pt-20   flex-wrap '>
        <input
          className='border-2 border-red-500 rounded-3xl mt-10 ml-16 mb-3 p-2 min-w-80 placeholder-black text-center  placeholder:text-gray-500' placeholder='Search for restaurants and food'
          type='text'
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value)
          }}
        />
        <button
          className='border-2 bg-red-500 text-white rounded-3xl mt-10 ml-6 mr-72 mb-3 min-w-32'
          onClick={() => {
            // console.log(listOfRestaurant)
            const filteredRestaurant = listOfRestaurant.filter((rest) => (
              rest.info.name.toLowerCase().includes(searchText.toLowerCase())
            ))
            setFilteredRestaurant(filteredRestaurant)
          }}

        > Search</button>
        <button
          className='border-2 border-red-500 text-red-500 rounded-3xl mt-10 ml-20 mb-3 p-2 min-w-52'
          onClick={() => {
            const filteredData = listOfRestaurant.filter(
              (res) => res.info.avgRating > 4.5
            )
            setFilteredRestaurant(filteredData)
          }}
        > Top Rated Resturent </button>
      </div>

      <h1 className='mt-8 ml-16 mb-3 font-medium text-3xl font-Ubuntu'>Restaurants with online food delivery in Jamnager</h1>
      
      <div className='flex flex-wrap justify-center' >
        { filteredRestaurant.map((restaurant) => (
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
    </div>
  );

}
export default Home



// make a saperate component of the filtered list of rest and at the time of onclick event we call that component.
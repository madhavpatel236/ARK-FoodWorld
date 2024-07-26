import React, { useEffect, useState } from 'react'
import Card from './Card/Card'
import Shimmer from './Shimmer/Shimmer'
import {SWIGGY_HOME_API} from '../utils/constance'
import { Link } from 'react-router-dom';

function Home() {
  const [listOfRestaurant, setlistOfRestaurant] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");

  
useEffect(() => {
  fetchData();
}, []);

const fetchData = async () => {
  const data = await fetch(
    SWIGGY_HOME_API
  );
  const json = await data.json();
  
  setlistOfRestaurant(
    json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
  );
  setFilteredRestaurant(
    json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
  );
};

  return listOfRestaurant.length === 0 ? (
    <Shimmer />
  ) : (
    <div>
      <div className='flex flex-wrap'>
        <input
          className='border-2 border-black rounded-3xl mt-10 ml-16 mb-3 p-2 min-w-80 placeholder-black placeholder:text-gray-500' placeholder='Search for restaurants and food'
          type='text'
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value)
          }}
        />
        <button
          className='border-2 bg-red-600 text-white rounded-3xl mt-10 ml-6 mr-72 mb-3 min-w-32'
          onClick={() => {
            // console.log(listOfRestaurant)
            const filteredRestaurant = listOfRestaurant.filter((rest) => (
              //  console.log(rest)
              rest.info.name.toLowerCase().includes(searchText.toLowerCase())
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
            // console.log(filteredData)
            setFilteredRestaurant(filteredData)
          }}
        > Top Rated Resturent </button>
      </div>
      <h1 className='mt-8 ml-16 mb-3 font-medium text-3xl font-Ubuntu'>Restaurants with online food delivery in Jamnager</h1>
      <div className='flex flex-wrap justify-center' >
        {/* {console.log(filteredRestaurant)} */}
        {filteredRestaurant.map((restaurant) => (
          <Link to={"rest-detail/"+ restaurant.info.id} key={restaurant.info.id}><Card  resData={restaurant?.info} /></Link>
        ))}
      </div>
    </div>
  );
}

export default Home




{/* <div className="body">
      <div className="cont-bn">
        <div className="Search">
          <input
            className="search-box"
            data-testid="search-input"
            placeholder="Search your Restaurant..."
            type="text"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          ></input>
          <button
            className="btn"
            onClick={() => {
              // filter the restaurant cards & update the UI
              const filteredRestaurant = listOfRestaurant.filter((res) => {
                res.info.name.toLowerCase().includes(searchText.toLowerCase());
              });
              setFilteredRestaurant(filteredRestaurant);
              // search Text
              console.log(searchText);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredData = listOfRestaurant.filter(
              (res) => res.info.avgRating > 4
            );
            setlistOfRestaurant(filteredData);
            console.log(filteredData);
          }}
        >
          Top Rated Restaurants
        </button>          
      </div>
      <div className="res-container">
        {filteredRestaurant.map((restaurant) => (
              <Card resData={restaurant?.info} />
        ))}
      </div>
    </div> */}
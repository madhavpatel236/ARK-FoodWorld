import React, { useEffect, useState } from 'react'
import Card from './Card/Card'
import Shimmer from './Shimmer/Shimmer'

function Home() {
  const [listOfRestaurant, setlistOfRestaurant] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");


  console.log("body rendering", listOfRestaurant);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://thingproxy.freeboard.io/fetch/https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0759837&lng=72.8776559&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setlistOfRestaurant(
      // optional chaining:-
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
            setsearchText(e.target.value)
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
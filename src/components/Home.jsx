import React, { useEffect, useState } from 'react'
import Card from './Card/Card'

function Home() {
  const [data, setData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const fetchData = await fetch('https://thingproxy.freeboard.io/fetch/https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.4707019&lng=70.05773&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING')
      const response = await fetchData.json()
      const final = await response?.data?.cards[4].card?.card?.gridElements?.infoWithStyle?.restaurants
      // console.log('final', final)
      setData(final)
    }
    fetchData();
  }, [])


  // TODO : pre redndering of the home page add the last 

  return (
    <div>
      <div className='flex flex-wrap'>
        <input className='border-2 border-black rounded-3xl mt-10 ml-20 mb-3 p-2 min-w-80 placeholder-black placeholder:text-gray-400' placeholder='Search for restaurants and food' />
        <button className='border-2 bg-red-600 text-white rounded-3xl mt-10 ml-6 mr-72 mb-3 min-w-32'> btn</button>
        <button className='border-2 border-red-500 text-red-500 rounded-3xl mt-10 ml-20 mb-3 p-2 min-w-52'> Top Rated Items </button>
      </div>
      <div className='flex flex-wrap justify-center' >
        {data.map((item) => (
          // console.log(item.info.id)
          <Card key={item.info.id} resData={item} />
        ))}
      </div>
    </div>
  )
}

export default Home
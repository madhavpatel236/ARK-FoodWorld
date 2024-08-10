import React from 'react'

function AboutShimmer() {
  return (

    <div className="flex flex-col justify-center  items-center  h-auto w-full  ">

      <div className=' flex w-9/12 pt-56 pb-10 justify-between items-center rounded-xl  '>
        <div className='rounded-2xl  w-72 h-96 mr-4 p-4 border-2 ' /> 
        <div className='  '>
          <div className='flex mb-4 pl-64 pr-64 pb-10 justify-center border-2 rounded-xl '></div>
          <div className=' ml-8 mr-8 pl-64 pr-64 pb-28 border-2 rounded-xl '></div>
        </div>
      </div>

      <div className='flex gap-3 mb-5 justify-center items-center border-2 rounded-xl '>
        <div className='w-16 h-16' />
        <div className='w-20 h-20' />
        <div className='w-16 h-16' />
        <div className='w-20 h-16' />
        <div className='w-20 h-16' />
        <div className='w-20 h-16' />
        <div className='w-20 h-16' />
      </div>
    </div>

  )
}

export default AboutShimmer
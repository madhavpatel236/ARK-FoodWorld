import React, { useState } from 'react'
import Items from './Items'

function ItemList({ options, showItems, SetShowIndex, setEnable }) {

    const handleSubmit1 = () => {
        SetShowIndex()
    }
    const handleSubmit2 =() => {
        setEnable()
    }

    return (
        <>
            <div className='bg-gray-100 rounded-2xl mb-3 mt-3 font-Ubuntu text-xl'>
                {/* Accordian Header  */}
                <div className=' flex justify-between p-4 font-bold cursor-pointer'
                    onClick={() => {
                        handleSubmit1();
                        handleSubmit2()
                    }}
                >
                    <span> {options?.title} ({options?.itemCards?.length}) </span>
                    <button> ⬇️ </button>
                </div>

                {/* Accordian Body */}
                <div className='p-1 text-sm'>
                    {showItems && <Items data={options?.itemCards} />}
                </div>

            </div>
            <div className='border m-auto w-auto border-gray-300'> </div>
        </>
    )
}

export default ItemList
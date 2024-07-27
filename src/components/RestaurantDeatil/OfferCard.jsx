import React from 'react'
import { CDN_URL } from '../../utils/constance';

function OfferCard(props) {
    const { offer } = props;
    // console.log(offer)


    return (
        <div>
            <div className='flex justify-center items-center w-60 h-16 border-black border-2 rounded-xl '>
                <img className=' w-10 h-10 mr-4' src={CDN_URL + offer?.offerLogo} alt="offer Logo" />
                <div className='font-Ubuntu'>
                    <div className='font-bold '>{offer?.header}</div>
                    <div className='font-normal text-gray-600 font-Ubuntu'>{offer?.couponCode}</div>
                </div>
            </div>
        </div>
    )
}

export default OfferCard
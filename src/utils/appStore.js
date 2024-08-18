import { configureStore } from '@reduxjs/toolkit'
import cartSlice from './Slices/cartSlice';
import cacheSlice from './Slices/cacheSlice';


    const appStore = configureStore({
        reducer: {
            cart: cartSlice,
            cache: cacheSlice,
        },
    })

export default appStore;
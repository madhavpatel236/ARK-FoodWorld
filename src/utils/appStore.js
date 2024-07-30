import { configureStore } from '@reduxjs/toolkit'
import cartSlice from './Slices/cartSlice';


    const appStore = configureStore({
        reducer: {
            cart: cartSlice,
        },
    })

export default appStore;
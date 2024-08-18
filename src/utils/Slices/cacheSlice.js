import { createSlice, current } from "@reduxjs/toolkit";

const cacheSlice = createSlice({
    name: "cache",
    initialState: {

    },
    reducers: {
        cacheResults: (state, action) => {
            state = Object.assign(state, action.payload)
            // console.log(current(state))
        }
    }
})  

export default cacheSlice.reducer

export const {cacheResults} = cacheSlice.actions
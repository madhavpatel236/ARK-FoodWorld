import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items:[],
    },
    reducers:{
        //muting the state means that we can directly update the variable we cannot only change and save the prev value.
        addItems: (state, action) => {
            state.items.push(action.payload)
        },
        removeItems: (state) => {
            state.items.pop();
        },
        clearCart: (state) => {
             return( items = [] );
        }
    }
})

export default cartSlice.reducer;
export const {addItems, removeItems, clearCart} = cartSlice.actions;
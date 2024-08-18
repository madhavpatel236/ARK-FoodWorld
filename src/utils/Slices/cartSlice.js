import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: [],
    },
    reducers: {
        //muting the state means that we can directly update the variable we cannot change and save the prev value.
        addItems: (state, action) => {
            state.items.push(action.payload)
        },
        removeItems: (state, action) => {
            const indexToRemove = state.items.findIndex(item => item?.card?.info?.id === action.payload)
            if (indexToRemove !== -1) {
                state.items.splice(indexToRemove, 1)
            }
        },
        clearCart: (state) => {
            return { items: [] };
        }
    }
})

export default cartSlice.reducer;
export const { addItems, removeItems, clearCart } = cartSlice.actions;
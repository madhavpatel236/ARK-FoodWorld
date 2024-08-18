
# Redux Toolkit

- `Store`:
  - Store is a consider as a big one object which contains all the major info of the our application. Store is paleced in a center globle place. in our application any store is access the store, they can read data thay can write data to it.

- `Slices` :
  - Slices is a small portion of our store. we can also create a multiple slices in our store.
  - EX: suppose we need a user information (Login / Logout info) then we create one slice from that but if we want a cart info then we create one another slice for them.
  - So assume that as our need based on the functionality we can devide a store into the many Slices.

- `Dispatch & Action` :
  - If we want to update the any data in the store then we cannot directly add them. so we can use the Dispatch & Action thay call the one function (Reducer) and throught that function we can modify in the store.

  - EX: in our case suppose we need to add the food into the cart and we use the RTK and we have a store for that so if user can add the item then we cannot directly add in the store we use the Dispatch & Action and then they call the one function (Reducer) and through that function we can modify in the store and add the items.

  - If Modify the data : `Dispatch & Action > Function(Reducer) > Update in the Slice > Store`

- `Reducer`:

  - Reducer is function which can modify the store.
  - Resucer is work between the Dispatch & Action and Slices. so we can also call as a bridge between them.

- `Selector` :
  - From the help of the selector we can get the data from the store and then use that in our application.
  - EX: in our case after the modify the data in the perticular Slice of the store we need to use them in our application so at that time we use the Selector.
  - `Slice > Selector > now we used the updated info in our Application`

##

- `Slector has one phenomena which is called as a Suscribe a Store.` Which means that is any changes occure in the slice then in our header component autometically update the values .
- EX: Header component is subscribe the our store ,means that header component  sync with the store.

#

![Lacture Notes](./src/img/RTK%20lacture.jpg)

### Code Stap:

``` javascript

Store.js : 

import { configureStore } from '@reduxjs/toolkit'

    const appStore = configureStore({
        reducer: { // it is work as a upper level reducer, which is contain all the Slices reducers
            cart: cartSlice, 
            user: userSlice,
        }
    })


export default appStore;
```
#

``` js 
Slice.js: 

import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "Slice Name", // Slice Name
    initialState: {
        ITEMS:[] // Initial state of the slice items this can variable, object or array ext.
    },
    reducers:{ // in the reducer we can write a function that can write a data in the store or we can say a function which can modify our initial state or after that more further states.
        EX : addItems: (state, action) => {  // from the state we get a prev state and from the action we get a data which we can need to change .
             state.items.push(action.payload)
        },
    }
})

export default cartSlice.reducer; // first of all we can export default the reducers which is accessed by the store
export const {addItems} = cartSlice.actions; // now we can export the actions from which we can perform the action to change the state.
```
#

```js

// from here we can directly sent a data to the store( Slice ).
 const dispatch = useDispatch() 

    const handleSubmit = (data) => {
        dispatch(reducer of Slice(data)) // we can use the reducer of the slices for modify the data. In short we can use the function which can modify the data in the store.
        // EX: dispatch(addItems(food)) 
    }
```
# 

``` js

    const Selector = useSelector((store) => store. Store Reducer. items(from the slice) );
    // EX: const cartItems = useSelector((store) => store.cart.items);

```

# Cache & Debouncing

- In the Cache we will store the data of the user serch and if user another time search the same things then we cannnot call the API instand we will directly show the result from the catch

- In our project we also apply the cache system in the search


## Formate of Save Cache

- if we save the data in the [] formate then time complexity for finding them in 0(n)
- if we use the {} then time complexity is 0(1)

- so in most of the cases we use the object{} structure for the save the cache data (in this project we was also use the {})

``` js
{
    key1: ["", "" ,""], 
    key2: ["", "" ,""],
}
````

```
 EX: 
    car : {"BMW", "AUDI", "RR"},
    mobile: {"Samsung", "Apple", "Xiomi" }
```

## Steps

#### step-1

- we will create a slice for save the store data in the slice so we use them any where

``` js
import { createSlice, current } from "@reduxjs/toolkit";

const cacheSlice = createSlice({
    name: "cache",
    initialState: {

    },
    reducers: {
        cacheResults: (state, action) => {
            state = Object.assign(state, action.payload) // here we merged 2 objects
            // console.log(current(state))
        }
    }
})  

export default cacheSlice.reducer

export const {cacheResults} = cacheSlice.actions
```
#
#

#### step-2

- Now we can give the slice value to the store

``` js
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
```
#
#

#### step-3

- Now for use the store subscription first we need to dispatch some data or in the store.
- for that we will nned to dispatch the data in the form of `key : value` form

`
[searchedText] : API Given result based on search in all the condition we have a array
`

``` js
// API call for the suggesions in the search 
  const searchRecomendation = async () => {
    const data = await fetch(`https://thingproxy.freeboard.io/fetch/https://www.swiggy.com/dapi/restaurants/search/suggest?lat=22.4833391&lng=70.05802659999999&str=${searchText}&trackingId=undefined&includeIMItem=true`)
    const json = await data.json()
    const searchedRes = await json?.data?.suggestions;
    // console.log(searchedRes)

    const mapedRes = searchedRes && searchedRes.map((data) => {
      return data.text
    })

    setSearchedRest(mapedRes)

    // Here we dispatch the search text as well as suggesition in the store slice 
    dispatch(
      cacheResults({
        [searchText]: mapedRes
      })
    )
  }
```
#
#

#### step-4

- now we can check the condition that searched text is present in the cache or not
- condition:
  - if user searched item was present in the cache them don't call the API instand of that we can diretly subscribe the store -> cacheSlice

``` js
useEffect(() => {

    const debounsing = setTimeout(() => {

      // apply the cache check condition
      if (searchCache[searchText]) { // searchCache[searchText] -> means that searchText is present in the searchCache or not
        setSearchedRest(searchCache[searchText]) // if present then we can directly setSearchedRest from the caache slice 
      }else{
        searchRecomendation();
      }
    }, 200);

    return () => {
      clearTimeout(debounsing)
    }
  }, [searchText])```

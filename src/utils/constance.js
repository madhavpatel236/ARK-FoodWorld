export const CDN_URL =
  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";

export const SWIGGY_HOME_API =
  // "https://thingproxy.freeboard.io/fetch/https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.4825588&lng=70.0589194&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
  "https://food-ordering-app-server.vercel.app/api/proxy/swiggy/dapi/restaurants/list/v5?lat=22.4825588&lng=70.0589194&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"

export const SWIGGY_REST_DETAILS_API =
  'https://food-ordering-app-server.vercel.app/api/proxy/swiggy/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.4833391&lng=70.05802659999999&restaurantId='
// "https://thingproxy.freeboard.io/fetch/https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.4833391&lng=70.05802659999999&restaurantId="

// export const SWIGGY_SEARCH_API = // NEED to understand the variable concept in the API
// `https://www.swiggy.com/dapi/restaurants/search/suggest?lat=22.30080&lng=73.20430&str=${search}&trackingId=undefined&includeIMItem=true`
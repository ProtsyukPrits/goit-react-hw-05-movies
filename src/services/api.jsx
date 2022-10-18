import axios from "axios";
const API_KEY = '68dd2d07f1b8d9799366e4d9411e689b';
const BASE_URL = 'https://api.themoviedb.org/3/';



const trendingFetch = async () => {
  const fetch = await axios.get(`${BASE_URL}trending/all/day?api_key=${API_KEY}`)
  return fetch.data
}

export {trendingFetch}

// /trending/get-trending 
// /search/search-movies 
// /movies/get-movie-details 
// /movies/get-movie-credits 
// /movies/get-movie-reviews 
import axios from 'axios';
const API_KEY = '68dd2d07f1b8d9799366e4d9411e689b';
const BASE_URL = 'https://api.themoviedb.org/3/';

const getTrendingFetch = async () => {
  const fetch = await axios.get(
    `${BASE_URL}trending/all/day?api_key=${API_KEY}`
  );
  return fetch.data;
};

const getSearchFetch = async querySearch => {
  const fetch = await axios.get(
    `${BASE_URL}search/movie?api_key=${API_KEY}&language=en-US&query=${querySearch}&page=1&include_adult=false`
  );
  return fetch.data;
};

const getMovieDetailsFetch = async movieId => {
  const fetch = await axios.get(
    `${BASE_URL}movie/${movieId}?api_key=${API_KEY}&language=en-US`
  );
  return fetch.data;
};

const getMovieCreditsFetch = async movieId => {
  const fetch = await axios.get(
    `${BASE_URL}movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`
  );
  return fetch.data;
};

const getMovieReviewsFetch = async movieId => {
  const fetch = await axios.get(
    `${BASE_URL}movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US`
  );
  return fetch.data;
};

export {
  getTrendingFetch,
  getSearchFetch,
  getMovieDetailsFetch,
  getMovieCreditsFetch,
  getMovieReviewsFetch,
};



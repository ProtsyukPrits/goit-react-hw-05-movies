import { useEffect, useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
// import { trendingFetch } from "services/api";
import { Home } from '../pages/Home';
// import { MovieDetails } from "./MovieDetails";
// import { Movies } from "./Movies";





export const App = () => {

  useEffect(() => {
  

}, )





  return (
    <>
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/movies'>Movies</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home/>}></Route>

        <Route path="/movies" element={<div>Movies</div>}>
          <Route path=":movieId" element={<div>MovieDetails</div>}>
            <Route path="cast" element={<div>Cast</div>}></Route>
            <Route path="reviews" element={<div>Rewiews</div>}></Route>
          </Route>
        </Route>
        <Route path="*" element={<Home />} />
      </Routes>
    </>
  );
};

import { Movies } from 'pages/Movies';
import { Link, Route, Routes } from 'react-router-dom';
import { Home } from '../pages/Home';
import { Cast } from './Cast/Cast';
import { MovieDetails } from '../pages/MovieDetails';
import { Reviews } from './Reviews';
import { Header } from './App.styled';

export const App = () => {
return (
  <>
    <Header>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/movies">Movies</Link>
      </nav>
    </Header>

    <Routes>
      <Route path="/" element={<Home />}></Route>

      <Route path="/movies" element={<Movies />}></Route>
      <Route path="/movies/:movieId" element={<MovieDetails />}>
        <Route path="cast" element={<Cast />}></Route>
        <Route path="reviews" element={<Reviews />}></Route>
      </Route>
      <Route path="*" element={<Home />} />
    </Routes>
  </>
);
};

import { Link, Outlet, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getMovieDetailsFetch,} from 'services/api';

export const MovieDetails = () => {
  const IMAGE_URL = 'https://image.tmdb.org/t/p/w500';

  const [details, setDetails] = useState([]);

  const { movieId } = useParams();
  useEffect(() => {
    const dataMovieDetailsFetch = async () => {
      const res = await getMovieDetailsFetch(movieId);
      // console.log('detRes', res);
      setDetails([res]);
    };
    dataMovieDetailsFetch();
  }, [movieId]);

  return (
    <div>
      {details.map(detail => (
        <div key={detail.id}>
          <h2>title</h2>
          <img src={`${IMAGE_URL}${detail.backdrop_path}`} alt="" />
          <p>paragr</p>
          <p>paragr</p>
        </div>
      ))}
      <div>
        <Link to="cast">Cast</Link>
        <Link to="reviews">Reviews</Link>
      </div>
      <Outlet />
    </div>
  );
};

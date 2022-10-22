import { getMovieCreditsFetch } from 'services/api';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export const Cast = () => {
  const IMAGE_URL = 'https://image.tmdb.org/t/p/w500';
  const [credits, setCredits] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    const dataMovieCreditsFetch = async () => {
      const res = await getMovieCreditsFetch(movieId);
      const credits = res.cast;
      console.log('credRes', res);
      setCredits(credits);
    };
    dataMovieCreditsFetch();
  }, [movieId]);
  console.log('movieId');
  console.log('credits', credits);

  return (
    <div>
      {credits.map(({ cast_id, profile_path, character, name }) => (
        <div key={cast_id}>
          <img
            src={`${IMAGE_URL}${profile_path}`}
            alt=""
            width="200"
            height="200"
          />
          <p>{name}</p>
          <p>Character: {character}</p>
        </div>
      ))}
    </div>
  );
};

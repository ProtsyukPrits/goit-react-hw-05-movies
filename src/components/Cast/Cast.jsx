import { getMovieCreditsFetch } from 'services/api';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ActorDetails, Photo } from './Cast.styled';
import { PropTypes } from 'prop-types'

const Cast = () => {
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
    <ActorDetails>
      {credits.map(( { cast_id, profile_path, character, name  }) => (
        <div key={cast_id}>
          <Photo
            src={`${IMAGE_URL}${profile_path}`}
            alt={name}
            width="200"
            height="200"
          />
          <p>{name}</p>
          <p>Character: {character}</p>
        </div>
      ))}
    </ActorDetails>
  );
};


Cast.propTypes = {
  credits: PropTypes.shape({
    cast_id: PropTypes.string.isRequired,
    profile_path: PropTypes.string.isRequired,
    character: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }),
};


export default Cast;
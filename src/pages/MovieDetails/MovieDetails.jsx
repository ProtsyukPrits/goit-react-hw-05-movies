import { Link, Outlet, useParams, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getMovieDetailsFetch } from 'services/api';
import LinkGoBack from 'components/LinkGoBack';
import { AddInformation, DetailsDescriptions, GenresInfo, MovieDetailsPhoto, Photo } from './MovieDetails.styled';
import {PropTypes} from 'prop-types'

export const MovieDetails = () => {
  const IMAGE_URL = 'https://image.tmdb.org/t/p/w500';
  const [details, setDetails] = useState([]);
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/movies';

  useEffect(() => {
    const dataMovieDetailsFetch = async () => {
      const res = await getMovieDetailsFetch(movieId);
      setDetails([res]);
    };
    dataMovieDetailsFetch();
  }, [movieId]);

  return (
    <div>
      <LinkGoBack to={backLinkHref}>Go back</LinkGoBack>
      {details.map(
        ({
          backdrop_path,
          id,
          original_title,
          overview,
          genres,
          vote_average,
        }) => (
            <MovieDetailsPhoto
           key={id}>
            <Photo
              src={`${IMAGE_URL}${backdrop_path}`}
              alt=""
              width="150"
              height="150"
            />
            <DetailsDescriptions>
              <h2>{original_title}</h2>

              <p>{Math.floor(vote_average * 10)}%</p>
              <h3> Overviews</h3>
              <p>{overview}</p>
              <h3>Genres</h3>
              <GenresInfo>
                {' '}
                {genres.map(({ id, name }) => (
                  <p key={id}>{name}</p>
                ))}
              </GenresInfo>
            </DetailsDescriptions>
            </MovieDetailsPhoto>
          
        )
      )}
      <AddInformation>
        <p>Additional information</p>
        <Link to="cast">Cast</Link>
        <Link to="reviews">Reviews</Link>
      </AddInformation>
      <Outlet />
    </div>
  );
};


MovieDetails.propTypes = {
  backdrop_path: PropTypes.string,
  id: PropTypes.number,
  original_title: PropTypes.string,
  overview: PropTypes.string,
  vote_average: PropTypes.string,
  genres: PropTypes.array,
  name: PropTypes.string,
};

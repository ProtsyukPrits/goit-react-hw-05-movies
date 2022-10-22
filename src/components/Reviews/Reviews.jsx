import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviewsFetch } from 'services/api';

export const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    const dataMovieReviewsFetch = async () => {
      const res = await getMovieReviewsFetch(movieId);
      const reviews = res.results;
      console.log('111', reviews);
      setReviews(reviews);
    };
    dataMovieReviewsFetch();
  }, [movieId]);

  return (
    <div>
      {reviews.length !== 0 ? (
        reviews.map(({ id, content, author }) => (
          <div key={id}>
            <h3>Autor: {author}</h3>
            <p>{content}</p>
          </div>
        ))
      ) : (
        <p>We don`t have any reviews for this movie.</p>
      )}
    </div>
  );
};

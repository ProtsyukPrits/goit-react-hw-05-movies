import { Link, useLocation } from 'react-router-dom';
import { PropTypes } from 'prop-types';

const MoviesList = ({ items }) => {
  const location = useLocation();
  return (
    <>
      {items.map(({ title, id }) => (
        <div key={id}>
          <Link to={`/movies/${id}`} state={{ from: location }}>
            {' '}
            {title}
          </Link>
        </div>
      ))}
    </>
  );
};



MoviesList.propTypes = {
  items: PropTypes.array.isRequired,
  title: PropTypes.string,
  id: PropTypes.number,
};

export default MoviesList;
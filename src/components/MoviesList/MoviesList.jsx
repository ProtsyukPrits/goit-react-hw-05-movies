import { Link } from "react-router-dom";

const MoviesList = ({ items }) => {
  return (
    <>
      {items.map(({title, id }) => (
        <div key={id}>
          <Link to={`/movies/${id}`}> { title }</Link>
       </div>
     ))}
    </>
  );
}

export default MoviesList;
import { getTrendingFetch} from 'services/api';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Container, Item, Title } from './Home.styled';
import {PropTypes} from 'prop-types'

export const Home = () => {
  const location = useLocation();
  const [trending, setTrending] = useState([]);

  useEffect(() => {
    const dataTrendingFetch = async () => {
      const res = await getTrendingFetch();
      setTrending(res.results);
    };
    dataTrendingFetch();
  }, []);

  return (
    <Container>
       <Title>Trending today</Title>
      {trending.map(({ original_title, name, id }) => (
        <Item
          to={`/movies/${id}`}
          state={{from: location}}
          key={id}
          id={id}
        >
          {original_title || name}
        </Item>
      ))}
    </Container>
  );
};

Home.propTypes = {
  original_title: PropTypes.string,
  name: PropTypes.string,
  id: PropTypes.number,
}

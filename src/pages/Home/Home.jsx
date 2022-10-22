import { getTrendingFetch} from 'services/api';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {Container,Item, Title } from './Home.styled';

export const Home = () => {
  const [trending, setTrending] = useState([]);

  useEffect(() => {
    const dataTrendingFetch = async () => {
      const res = await getTrendingFetch();
      console.log('trandRes', res.results);
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
          key={id}
          id={id}
        >
          {original_title || name}
        </Item>
      ))}
    </Container>
  );
};

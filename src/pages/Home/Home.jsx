import { trendingFetch } from 'services/api';
import { useEffect, useState} from 'react';
const IMAGE_URL = 'https://image.tmdb.org/t/p/w500';


export const Home = () => {
  const [data, setData] = useState([]);


  useEffect(() => {
    const dataFetch = async () => {
      const data = await trendingFetch()
      console.log(data.results)
      setData(data.results)
    }
    dataFetch()
  }, [])
 
  return (
    <>
      {data.map(({ poster_path, original_title, id }) => (
        <a>
          <img
            key={id}
            src={IMAGE_URL + poster_path}
            alt={original_title}
            width="300"
            height="300"
          />
        </a>
      ))}
    </>
  );
};

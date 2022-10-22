import MoviesList from 'components/MoviesList';
import SearchBox from 'components/SearchBar';
import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { getSearchFetch } from 'services/api';

export const Movies = () => {
  
  const [search, setSearch] = useState([]);
  const [query, setQuery] = useState('');

  useEffect(() => {
    if (!query) return;

    const dataSearchFetch = async () => {
      const res = await getSearchFetch(query);
      const search = res.results;
      // console.log('res', res);
      setSearch([...search ]);
    };
    dataSearchFetch();
  }, [query]);

  const handleSubmit = e => {
    e.preventDefault();
    // if (query.trim() === '') return; // need toaster
    setQuery(e.target.elements.query.value);
    e.target.reset();
   
  };
  console.log('query1',query)
  console.log('search', search);
  return (
    <div>
      <div>
        <SearchBox onSubmit={handleSubmit}></SearchBox>
        <MoviesList items={search}></MoviesList>
      </div>

      <Outlet />
    </div>
  );
};

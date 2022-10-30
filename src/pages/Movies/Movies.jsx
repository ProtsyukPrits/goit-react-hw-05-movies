import MoviesList from 'components/MoviesList';
import { Suspense } from 'react';
import SearchBar from 'components/SearchBar';
import { useEffect, useState } from 'react';
import { Outlet, useSearchParams } from 'react-router-dom';
import { getSearchFetch } from 'services/api';

const Movies = () => {
  const [search, setSearch] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const querySearch = searchParams.get('query') ?? '';


  useEffect(() => {
    if (querySearch === '') return;

    const dataSearchFetch = async () => {
      const res = await getSearchFetch(querySearch);
      const search = res.results;
      setSearch(search);
    };
    dataSearchFetch();
  }, [querySearch]);

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    // if (query.trim() === '') return; // need toaster
    setSearchParams({ query: form.elements.query.value });
    form.reset();
  };

  return (
    <div>
      <div>
        <SearchBar onSubmit={handleSubmit}></SearchBar>
        {search && <MoviesList items={search}></MoviesList>}
      </div>

      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default Movies;
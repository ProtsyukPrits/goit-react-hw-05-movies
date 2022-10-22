const SearchBox = ({ onSubmit }) => {
  return (
    <>
      <form autoComplete="off" onSubmit={onSubmit}>
        <input
          type="text"
          name="query"
          placeholder="Search images and photoes"
        />

        <button type="submit"></button>
      </form>
    </>
  );
};

export default SearchBox;

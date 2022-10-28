import {PropTypes} from 'prop-types'

const SearchBar = ({ onSubmit }) => {
  return (
    <>
      <form autoComplete="off" onSubmit={onSubmit}>
        <input
          type="text"
          name="query"
          placeholder="Search films"
        />

        <button type="submit">Search</button>
      </form>
    </>
  );
};

export default SearchBar;


SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}
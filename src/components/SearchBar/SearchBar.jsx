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




SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}

export default SearchBar;
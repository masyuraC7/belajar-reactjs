/* eslint-disable react/prop-types */
export default function SearchBar({ query, setQuery, onSearchAnime, animes }) {
  function handleChange(e) {
    setQuery(e.target.value);
    onSearchAnime(e.target.value);
  }

  return (
    <div className="search-container">
      <input
        className="search"
        type="text"
        placeholder="Search anime..."
        value={query}
        onChange={(e) => handleChange(e)}
      />
      <p className="search-results">
        Found <strong>{animes.length}</strong> results
      </p>
    </div>
  );
}

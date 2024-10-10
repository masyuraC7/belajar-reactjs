/* eslint-disable react/prop-types */
import SearchBar from "./SearchBar";

export default function NavBar({ query, setQuery, onSearchAnime, animes }) {
  return (
    <nav className="nav-bar">
      <div className="logo">
        <span role="img">🍥</span>
        <h1>WeeBoo</h1>
        <span role="img">🍥</span>
      </div>
      <SearchBar
        query={query}
        setQuery={setQuery}
        onSearchAnime={onSearchAnime}
        animes={animes}
      />
    </nav>
  );
}

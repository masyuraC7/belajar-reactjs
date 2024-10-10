/* eslint-disable react/prop-types */
export default function AnimeList({
  animes,
  handleSelectedAnime,
  isOpen1,
  setIsOpen1,
}) {
  return (
    <div className="box-container">
      <div className="box">
        <div className={isOpen1 ? "box-header open" : "box-header"}>
          <h1 className="box-title">Anime Details</h1>
          <button
            className="btn-toggle"
            onClick={() => setIsOpen1((open) => !open)}
          >
            {isOpen1 ? "–" : "+"}
          </button>
        </div>
        {isOpen1 && (
          <div className="box-content">
            {animes.length === 0 ? (
              <h1 className="no-result">Result not found</h1>
            ) : (
              <ul className="list list-anime">
                {animes?.map((anime) => (
                  <li
                    key={anime.mal_id}
                    onClick={() => handleSelectedAnime(anime.mal_id)}
                  >
                    <img src={anime.image} alt={`${anime.title} cover`} />
                    <h3>{anime.title}</h3>
                    <div>
                      <p>
                        <span>{anime.year}</span>
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
